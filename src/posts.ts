import type { ComposedPost } from '@atcute/bluesky-threading';
import RichtextBuilder from '@atcute/bluesky-richtext-builder';

import { EventType, type TimedEvent } from './types';

export type Region = 'jp' | 'gl';

export function getCurrentTime(region: Region): string {
	const now = new Date();

	if (region === 'jp') {
		return now.toLocaleString('jp', { timeStyle: 'short', timeZone: 'Asia/Tokyo', hour12: false }) + ` JST`;
	} else {
		return now.toLocaleString('en', { timeStyle: 'short', timeZone: 'UTC', hour12: false }) + ` UTC`;
	}
}

export function buildJpPosts(events: TimedEvent[]): ComposedPost[] {
	const now = getCurrentTime('jp');

	const jp = new RichtextBuilder()
		.addTag('pso2ngs')
		.addText(' ')
		.addTag('pso2jp')
		.addText('\n')
		.addText(`お知らせ (${now})`);

	const en = new RichtextBuilder().addText(`Notices (${now})`);

	for (const { time, event } of events) {
		if (event.type === EventType.UNKNOWN) {
			jp.addText(`\n${time} - ${event.raw} (?)`);
			en.addText(`\n${time} - ${event.raw} (?)`);
		} else {
			jp.addText(`\n${time} - ${event.name.jp}`);
			en.addText(`\n${time} - ${event.name.en}`);
		}
	}

	return [
		{
			languages: ['ja'],
			content: jp,
		},
		{
			languages: ['en'],
			content: en,
		},
	];
}

export function buildGlPosts(events: TimedEvent[]): ComposedPost[] {
	const now = getCurrentTime('gl');

	const rt = new RichtextBuilder()
		.addTag('pso2ngs')
		.addText(' ')
		.addTag('pso2gl')
		.addText('\n')
		.addText(`Alerts (${now})`);

	for (const { time, event } of events) {
		if (event.type === EventType.UNKNOWN) {
			rt.addText(`\n${time} - ${event.raw} (?)`);
		} else {
			rt.addText(`\n${time} - ${event.name.en}`);
		}
	}

	return [
		{
			languages: ['en'],
			content: rt,
		},
	];
}
