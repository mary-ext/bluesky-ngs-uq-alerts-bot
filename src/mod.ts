import { CredentialManager, XRPC, XRPCError } from '@atcute/client';

import { publishThread } from '@atcute/bluesky-threading';

import { scrape } from './urgent.ts';

import configs from '../config.local.ts';

const MINUTE = 60_000;

await Deno.mkdir('./data', { recursive: true });

for (const { id, scrapeUrl, mappings, account, buildPosts } of configs) {
	console.log(`configuring ${id}`);

	Deno.cron(
		`alert-${id}`,
		'16,46 * * * *',
		// 16 -> 18, 20, 22, 25
		// 46 -> 48, 50, 52, 55
		{ backoffSchedule: [MINUTE * 2, MINUTE * 2, MINUTE * 2, MINUTE * 3] },
		async () => {
			console.log(`[${id}]: scraping the page`);

			const response = await fetch(scrapeUrl, {
				headers: {
					'user-agent': 'codeberg:mary-ext/bluesky-ngs-uq-alerts',
				},
			});

			if (!response.ok) {
				throw new Error(`unexpected response, got http ${response.status}`);
			}

			const source = await response.text();
			const events = scrape(source, mappings);

			if (events.length === 0) {
				throw new Error(`empty response`);
			}

			console.log(`[${id}]: got ${events.length} events`);

			const sessionFileUrl = `./data/${id}.session.json`;

			const auth = new CredentialManager({
				service: account.service,
				onSessionUpdate(session) {
					Deno.writeTextFileSync(sessionFileUrl, JSON.stringify(session, null, '\t'));
				},
				onExpired() {
					try {
						Deno.removeSync(sessionFileUrl);
					} catch (err) {
						if (err instanceof Deno.errors.NotFound) {
							return;
						}

						throw err;
					}
				},
			});

			const rpc = new XRPC({ handler: auth });

			try {
				const rawSession = Deno.readTextFileSync(sessionFileUrl);
				const session = JSON.parse(rawSession);

				if (account.identifier !== session.handle && account.identifier !== session.did) {
					throw new Deno.errors.InvalidData();
				}

				console.log(`[${id}]: resuming session`);

				await auth.resume(session);
			} catch (err) {
				if (err instanceof Deno.errors.NotFound) {
					console.log(`[${id}]: no session file found, creating new session`);
				} else if (err instanceof Deno.errors.InvalidData) {
					console.log(`[${id}]: session file is invalid, creating new session`);
				} else if (err instanceof XRPCError && err.kind === 'ExpiredToken') {
					console.log(`[${id}]: session expired, creating new session`);
				} else {
					console.error(err);
					console.log(`[${id}]: skipping`);

					return;
				}

				await auth.login({ identifier: account.identifier, password: account.password });
			}

			console.log(`[${id}]: signed in as @${auth.session!.handle}`);

			const posts = buildPosts(events);
			console.log(`[${id}]: got ${posts.length} posts`);

			if (posts.length === 0) {
				console.log(`[${id}]: skipping`);
				return;
			}

			await publishThread(rpc, { author: auth.session!.did, posts: posts });
			console.log(`[${id}]: posts published`);
		},
	);
}

console.log(`running`);

// check if we have a notify socket from systemd
const notifySocket = Deno.env.get('NOTIFY_SOCKET');
if (notifySocket) {
	const bin = '/usr/bin/systemd-notify';
	const pid = Deno.pid;

	// we'll just be using systemd-notify to do these signals
	console.log(`systemd notify socket found: ${notifySocket}`);

	// notify systemd that we're ready
	{
		const cmd = new Deno.Command(bin, { args: [`--pid=${pid}`, 'READY=1'] });
		const child = cmd.spawn();

		child.status.then((status) => {
			if (status.code !== 0) {
				console.error(`ready signal failed: ${status.code}`);
			}
		});
	}

	// if we have a watchdog, we'll keep it alive
	const watchdog = Deno.env.get('WATCHDOG_USEC');
	if (watchdog) {
		// convert to milliseconds
		const timeout = parseInt(watchdog) / 1000;
		const interval = timeout / 2;

		console.log(`watchdog found: ${timeout}ms`);

		const cmd = new Deno.Command(bin, { args: [`--pid=${pid}`, 'WATCHDOG=1'] });

		setInterval(() => {
			const child = cmd.spawn();

			child.status.then((status) => {
				if (status.code !== 0) {
					console.error(`watchdog signal failed: ${status.code}`);
				}
			});
		}, interval);
	}
}
