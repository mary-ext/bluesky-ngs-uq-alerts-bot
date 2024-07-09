import { BskyAuth, BskyXRPC } from '@mary/bluesky-client';
import type { AppBskyFeedPost } from '@mary/bluesky-client/lexicons';

import { getPostText, scrape } from './urgent';

export default {
	async scheduled(_event, env, _ctx): Promise<void> {
		const response = await fetch(
			'https://acf.me.uk/Projects/PSO2-API/eq_viewer.php?api=GLBN&offset=0&format=H',
			{ headers: { 'user-agent': 'codeberg:mary-ext/bluesky-ngs-uq-alerts' } },
		);

		if (!response.ok) {
			throw new Error(`Unexpected response, got ${response.status}`);
		}

		const source = await response.text();
		const events = scrape(source);

		console.log(`got ${events.length} events`);

		if (events.length === 0) {
			return;
		}

		const rpc = new BskyXRPC({ service: env.BLUESKY_SERVICE });
		const auth = new BskyAuth(rpc, {});

		{
			await auth.login({ identifier: env.BLUESKY_IDENTIFIER, password: env.BLUESKY_PASSWORD });
			console.log(`signed in as ${auth.session!.did}`);
		}

		const text = getPostText(events);

		{
			const record: AppBskyFeedPost.Record = {
				createdAt: new Date().toISOString(),
				text: text,
			};

			const { data } = await rpc.call('com.atproto.repo.createRecord', {
				data: {
					collection: 'app.bsky.feed.post',
					repo: auth.session!.did,
					record: record,
				},
			});

			console.log(`post created (${data.uri})`);
		}
	},
} satisfies ExportedHandler<Env>;
