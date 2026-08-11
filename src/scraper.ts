import { type EventMap, EventType, type TimedEvent } from './types';

export function scrape(source: string, eventMap: EventMap): TimedEvent[] {
	const matches = Array.from(
		source.matchAll(/>([0-9:]{5})[^]+?>([^]+?)</g),
		({ 1: time, 2: raw }): TimedEvent => ({
			time,
			event: raw in eventMap ? eventMap[raw] : { type: EventType.UNKNOWN, raw },
		}),
	);

	matches.sort((a, b) => a.time.localeCompare(b.time) || a.event.type - b.event.type);
	return matches;
}

export async function fetchEvents(scrapeUrl: string, eventMap: EventMap): Promise<TimedEvent[]> {
	const response = await fetch(scrapeUrl, {
		signal: AbortSignal.timeout(30_000),
		headers: {
			'user-agent': 'codeberg:mary-ext/bluesky-ngs-uq-alerts',
			'cache-control': 'no-cache',
		},
	});

	if (!response.ok) {
		throw new Error(`unexpected response, got http ${response.status}`);
	}

	const source = await response.text();
	return scrape(source, eventMap);
}
