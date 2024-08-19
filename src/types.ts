import { ComposedPost } from '@atcute/bluesky-threading';

import { EventMap } from './events.ts';
import { TimedEvent } from './urgent.ts';

export interface Config {
	id: string;
	scrapeUrl: string;
	account: {
		service: string;
		identifier: string;
		password: string;
	};
	mappings: EventMap;
	buildPosts(events: TimedEvent[]): ComposedPost[];
}
