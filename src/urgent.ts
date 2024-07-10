import RichtextBuilder, { type BakedRichtext } from '@mary/bluesky-richtext-builder';

import { eventMap } from './events';

export interface UrgentEvent {
	time: string;
	name: string;
}

export function scrape(source: string): UrgentEvent[] {
	return Array.from(
		source.matchAll(/>([0-9:]{5})[^]+?>([^]+?)</g),
		(m): UrgentEvent => ({ time: m[1], name: m[2] }),
	);
}

export function getPostRichtext(events: UrgentEvent[]): BakedRichtext {
	const sortedMatches = events.toSorted((a, b) => {
		return (eventMap.get(a.name) ?? -1) - (eventMap.get(b.name) ?? -1) || a.name.localeCompare(b.name);
	});

	const builder = new RichtextBuilder();

	builder.addTag('pso2ngs');
	builder.addText(` Global Alerts (${getCurrentTime()} UTC)`);

	for (const { time, name } of sortedMatches) {
		builder.addText(`\n${time} - ${name}`);
	}

	return builder.build();
}

function getCurrentTime(): string {
	const fmt = new Intl.DateTimeFormat('en-US', {
		timeStyle: 'short',
		timeZone: 'UTC',
		hour12: false,
	});

	return fmt.format(Date.now());
}
