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

export function getPostText(events: UrgentEvent[]): string {
	const sortedMatches = events.toSorted((a, b) => {
		return (eventMap.get(a.name) ?? -1) - (eventMap.get(b.name) ?? -1) || a.name.localeCompare(b.name);
	});

	let text = '';

	{
		text = `#pso2ngs Global Alerts (${getCurrentTime()})`;

		for (const { time, name } of sortedMatches) {
			text += `\n${time} - ${name}`;
		}
	}

	return text;
}

function getCurrentTime(): string {
	const fmt = new Intl.DateTimeFormat('en-US', {
		timeStyle: 'short',
		timeZone: 'UTC',
		hour12: false,
	});

	return fmt.format(Date.now());
}
