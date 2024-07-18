import { type EventInformation, type EventMap, EventType } from './events.ts';

export interface TimedEvent {
	time: string;
	event: EventInformation;
}

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
