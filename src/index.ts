import { createBlueskyClient, publishPosts, type BlueskyCredentials } from './bluesky';
import { glEvents, jpEvents } from './events';
import { buildGlPosts, buildJpPosts, type Region } from './posts';
import { fetchEvents } from './scraper';

interface RegionConfig {
	region: Region;
	scrapeUrl: string;
	eventMap: typeof glEvents;
	buildPosts: typeof buildGlPosts;
}

const REGIONS: RegionConfig[] = [
	{
		region: 'jp',
		scrapeUrl: 'https://acf.me.uk/Projects/PSO2-API/eq_viewer.php?api=JPNN&offset=9&format=H',
		eventMap: jpEvents,
		buildPosts: buildJpPosts,
	},
	{
		region: 'gl',
		scrapeUrl: 'https://acf.me.uk/Projects/PSO2-API/eq_viewer.php?api=GLBN&offset=0&format=H',
		eventMap: glEvents,
		buildPosts: buildGlPosts,
	},
];

// minutes that should always run (first attempt of each 30-min window)
const PRIMARY_MINUTES = new Set([16, 46]);

async function runForRegion(
	config: RegionConfig,
	credentials: BlueskyCredentials,
	kv: KVNamespace,
	currentMinute: number,
): Promise<void> {
	const { region, scrapeUrl, eventMap, buildPosts } = config;
	const stateKey = `state:${region}`;

	// check if we should run based on last success state
	const lastSuccess = await kv.get(stateKey);
	const isPrimaryMinute = PRIMARY_MINUTES.has(currentMinute);

	// only run on non-primary minutes if the last run failed
	if (!isPrimaryMinute && lastSuccess === 'ok') {
		console.log(`[${region}]: skipping (last run successful)`);
		return;
	}

	console.log(`[${region}]: scraping the page`);

	const events = await fetchEvents(scrapeUrl, eventMap);
	console.log(`[${region}]: got ${events.length} events`);

	const posts = buildPosts(events);
	console.log(`[${region}]: got ${posts.length} posts`);

	if (posts.length === 0) {
		console.log(`[${region}]: no posts to publish, skipping`);
		await kv.put(stateKey, 'ok');
		return;
	}

	const { rpc, did, handle } = await createBlueskyClient({ region, credentials, kv });
	console.log(`[${region}]: signed in as @${handle}`);

	await publishPosts(rpc, did, posts);
	console.log(`[${region}]: posts published`);

	// mark as successful
	await kv.put(stateKey, 'ok');
}

export default {
	async fetch(req: Request): Promise<Response> {
		const url = new URL(req.url);
		url.pathname = '/__scheduled';
		url.searchParams.set('cron', '16,18,20,22,25,46,48,50,52,55 * * * *');

		return new Response(
			`PSO2 NGS UQ Alerts Bot\n\nTo test the scheduled handler, ensure you have used "--test-scheduled" then try running:\ncurl "${url.href}"`,
		);
	},

	async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
		const currentMinute = new Date().getMinutes();
		console.log(`cron triggered at minute ${currentMinute}`);

		const tasks = REGIONS.map(async (config) => {
			const credentials = getCredentials(env, config.region);

			if (!credentials) {
				console.log(`[${config.region}]: missing credentials, skipping`);
				return;
			}

			try {
				await runForRegion(config, credentials, env.KV, currentMinute);
			} catch (err) {
				console.error(`[${config.region}]: exception`, err);

				// mark as failed so we retry on next run
				await env.KV.put(`state:${config.region}`, 'failed');
			}
		});

		// use waitUntil to ensure all tasks complete even if one fails
		ctx.waitUntil(Promise.all(tasks));
	},
} satisfies ExportedHandler<Env>;

function getCredentials(env: Env, region: Region): BlueskyCredentials | undefined {
	if (region === 'jp') {
		if (!env.BLUESKY_JP_PDS || !env.BLUESKY_JP_IDENTIFIER || !env.BLUESKY_JP_PASSWORD) {
			return undefined;
		}

		return {
			pds: env.BLUESKY_JP_PDS,
			identifier: env.BLUESKY_JP_IDENTIFIER,
			password: env.BLUESKY_JP_PASSWORD,
		};
	} else {
		if (!env.BLUESKY_GL_PDS || !env.BLUESKY_GL_IDENTIFIER || !env.BLUESKY_GL_PASSWORD) {
			return undefined;
		}

		return {
			pds: env.BLUESKY_GL_PDS,
			identifier: env.BLUESKY_GL_IDENTIFIER,
			password: env.BLUESKY_GL_PASSWORD,
		};
	}
}
