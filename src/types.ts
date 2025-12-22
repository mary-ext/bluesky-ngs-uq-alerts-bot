export const enum EventType {
	UNKNOWN = -1,

	SPECIAL = 0,

	AELIO = 1,
	RETEM = 2,
	KVARIS = 3,
	STIA = 4,
}

export type EventLocale = 'en' | 'jp';

export interface UnknownEventInformation {
	type: EventType.UNKNOWN;
	raw: string;
}

export interface KnownEventInformation {
	type: Exclude<EventType, EventType.UNKNOWN>;
	name: Record<EventLocale, string>;
}

export type EventInformation = UnknownEventInformation | KnownEventInformation;

export type EventMap = Record<string, KnownEventInformation>;

export interface TimedEvent {
	time: string;
	event: EventInformation;
}
