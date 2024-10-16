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

export const glEvents: EventMap = {
	// Concerts
	[`Song of War & Mourning`]: {
		type: EventType.SPECIAL,
		name: {
			en: `Live Concert`,
			jp: `ステージライブ`,
		},
	},

	// Aelio UQ
	[`Nex Vera Suppression Op`]: {
		type: EventType.AELIO,
		name: {
			en: `Nex Vera Suppression Op`,
			jp: `ネクス・ヴェラ討伐戦`,
		},
	},
	[`Command DOLLS Suppression Op`]: {
		type: EventType.AELIO,
		name: {
			en: `Command DOLLS Suppression Op`,
			jp: `統制型ドールズ討伐戦`,
		},
	},
	[`Mining Rig Defense`]: {
		type: EventType.AELIO,
		name: {
			en: `Mining Rig Defense: Aelio`,
			jp: `資源採掘リグ防衛戦：エアリオ`,
		},
	},
	[`Dark Falz Interception`]: {
		type: EventType.AELIO,
		name: {
			en: `Dark Falz Interception`,
			jp: `ダークファルス迎撃戦`,
		},
	},
	[`The Battle of Halphia Lake`]: {
		type: EventType.AELIO,
		name: {
			en: `The Battle of Halphia Lake`,
			jp: `ハルフィリア湖の戦い`,
		},
	},

	// Aelio LTUQ
	[`Flurry of Flowers`]: {
		type: EventType.AELIO,
		name: {
			en: `Flurry of Flowers`,
			jp: `戦変万花のエネミー掃討戦`,
		},
	},
	[`Happy Rappy Rumble`]: {
		type: EventType.AELIO,
		name: {
			en: `Happy Rappy Rumble`,
			jp: `ハッピーラッピー大作戦`,
		},
	},
	[`The Second Battle of Halphia Lake`]: {
		type: EventType.AELIO,
		name: {
			en: `The Second Battle of Halphia Lake`,
			jp: `第二次ハルフィリア湖要撃戦`,
		},
	},

	// Retem UQ
	[`Dustyl Vera Suppression Op`]: {
		type: EventType.RETEM,
		name: {
			en: `Dustyl Vera Suppression Op`,
			jp: `スナイダル・ヴェラ討伐戦`,
		},
	},
	[`Renus Vera Suppression Op`]: {
		type: EventType.RETEM,
		name: {
			en: `Renus Vera Suppression Op`,
			jp: `レヌス・ヴェラ討伐戦`,
		},
	},
	[`Mining Rig Defense: Retem`]: {
		type: EventType.RETEM,
		name: {
			en: `Mining Rig Defense: Retem`,
			jp: `資源採掘リグ防衛戦：リテム`,
		},
	},
	[`Omen of the Planetbreaker`]: {
		type: EventType.RETEM,
		name: {
			en: `Omen of the Planetbreaker`,
			jp: `星滅の予兆`,
		},
	},

	// Retem LTUQ
	[`Haunted Domain`]: {
		type: EventType.RETEM,
		name: {
			en: `Haunted Domain`,
			jp: `ホーンテッドドメイン`,
		},
	},
	[`Haunted Domain II`]: {
		type: EventType.RETEM,
		name: {
			en: `Haunted Domain`,
			jp: `ホーンテッドドメイン`,
		},
	},

	// Kvaris UQ
	[`Crocodylis Vera Suppression Op`]: {
		type: EventType.KVARIS,
		name: {
			en: `Crocodylis Vera Suppression Op`,
			jp: `クロコダラス・ヴェラ討伐戦`,
		},
	},
	[`Ams Vera Suppression Op`]: {
		type: EventType.KVARIS,
		name: {
			en: `Ams Vera Suppression Op`,
			jp: `アムス・ヴェラ討伐戦`,
		},
	},
	[`Mining Rig Defense: Kvaris`]: {
		type: EventType.KVARIS,
		name: {
			en: `Mining Rig Defense: Kvaris`,
			jp: `資源採掘リグ防衛戦：クヴァリス`,
		},
	},
	[`Remnants of Ambition`]: {
		type: EventType.KVARIS,
		name: {
			en: `Remnants of Ambition`,
			jp: `野望の残滓`,
		},
	},
	[`Planetcrusher Assault`]: {
		type: EventType.KVARIS,
		name: {
			en: `Planetcrusher Assault`,
			jp: `星砕の猛進`,
		},
	},

	// Stia UQ
	[`Nils Vera Suppression Op`]: {
		type: EventType.STIA,
		name: {
			en: `Nils Vera Suppression Op`,
			jp: `ニルス・ヴェラ討伐戦`,
		},
	},
	[`Doldoris Vera Suppression Op`]: {
		type: EventType.STIA,
		name: {
			en: `Doldoris Vera Suppression Op`,
			jp: `ドルドリス・ヴェラ討伐戦`,
		},
	},

	// Stia LTUQ
	[`Happy Rappy Rumble: Stia`]: {
		type: EventType.STIA,
		name: {
			en: `Happy Rappy Rumble: Stia`,
			jp: `ハッピーラッピー大作戦：スティア`,
		},
	},
};

export const jpEvents: EventMap = {
	// Concerts
	[`Song of War & Mourning`]: {
		type: EventType.SPECIAL,
		name: {
			en: `Live Concert`,
			jp: `ステージライブ`,
		},
	},

	// Aelio UQ
	[`Nex Aelio Subjugation`]: {
		type: EventType.AELIO,
		name: {
			en: `Nex Vera Subjugation`,
			jp: `ネクス・ヴェラ討伐戦`,
		},
	},
	[`Pedas Vera Subjugation`]: {
		type: EventType.AELIO,
		name: {
			en: `Pedas Vera Subjugation`,
			jp: `統制型ドールズ討伐戦`,
		},
	},
	[`Mining Rig Defense`]: {
		type: EventType.AELIO,
		name: {
			en: `Mining Rig Defense: Aelio`,
			jp: `資源採掘リグ防衛戦：エアリオ`,
		},
	},
	[`Dark Falz Interception`]: {
		type: EventType.AELIO,
		name: {
			en: `Dark Falz Interception`,
			jp: `ダークファルス迎撃戦`,
		},
	},
	[`The Battle of Lake Halphiria`]: {
		type: EventType.AELIO,
		name: {
			en: `The Battle of Lake Halphiria`,
			jp: `ハルフィリア湖の戦い`,
		},
	},

	// Aelio LTUQ
	[`Flurry of Flowers`]: {
		type: EventType.AELIO,
		name: {
			en: `Flurry of Flowers`,
			jp: `戦変万花のエネミー掃討戦`,
		},
	},
	[`Happy Rappy Rumble`]: {
		type: EventType.AELIO,
		name: {
			en: `Happy Rappy Rumble`,
			jp: `ハッピーラッピー大作戦`,
		},
	},
	[`The Second Battle of Lake Halphiria`]: {
		type: EventType.AELIO,
		name: {
			en: `The Second Battle of Lake Halphiria`,
			jp: `第二次ハルフィリア湖要撃戦`,
		},
	},

	// Retem UQ
	[`Snaedal Vera Subjugation`]: {
		type: EventType.RETEM,
		name: {
			en: `Snaedal Vera Subjugation`,
			jp: `スナイダル・ヴェラ討伐戦`,
		},
	},
	[`Lenus Vera Subjugation`]: {
		type: EventType.RETEM,
		name: {
			en: `Lenus Vera Subjugation`,
			jp: `レヌス・ヴェラ討伐戦`,
		},
	},
	[`Mining Rig Defense: Retem`]: {
		type: EventType.RETEM,
		name: {
			en: `Mining Rig Defense: Retem`,
			jp: `資源採掘リグ防衛戦：リテム`,
		},
	},
	[`Harbinger of Extinction`]: {
		type: EventType.RETEM,
		name: {
			en: `Harbinger of Extinction`,
			jp: `星滅の予兆`,
		},
	},

	// Retem LTUQ
	[`Haunted Domain`]: {
		type: EventType.RETEM,
		name: {
			en: `Haunted Domain`,
			jp: `ホーンテッドドメイン`,
		},
	},
	[`Haunted Domain II`]: {
		type: EventType.RETEM,
		name: {
			en: `Haunted Domain`,
			jp: `ホーンテッドドメイン`,
		},
	},

	// Kvaris UQ
	[`Crocodallus Vera Subjugation`]: {
		type: EventType.KVARIS,
		name: {
			en: `Crocodallus Vera Subjugation`,
			jp: `クロコダラス・ヴェラ討伐戦`,
		},
	},
	[`Ams Vera Subjugation`]: {
		type: EventType.KVARIS,
		name: {
			en: `Ams Vera Subjugation`,
			jp: `アムス・ヴェラ討伐戦`,
		},
	},
	[`Mining Rig Defense: Kvaris`]: {
		type: EventType.KVARIS,
		name: {
			en: `Mining Rig Defense: Kvaris`,
			jp: `資源採掘リグ防衛戦：クヴァリス`,
		},
	},
	[`Remnants of Ambition`]: {
		type: EventType.KVARIS,
		name: {
			en: `Remnants of Ambition`,
			jp: `野望の残滓`,
		},
	},
	[`Rampage of the Sunderer`]: {
		type: EventType.KVARIS,
		name: {
			en: `Rampage of the Sunderer`,
			jp: `星砕の猛進`,
		},
	},

	// Stia UQ
	[`Nilus Vera Subjugation`]: {
		type: EventType.STIA,
		name: {
			en: `Nilus Vera Subjugation`,
			jp: `ニルス・ヴェラ討伐戦`,
		},
	},
	[`Doldoris Vera Subjugation`]: {
		type: EventType.STIA,
		name: {
			en: `Doldoris Vera Subjugation`,
			jp: `ドルドリス・ヴェラ討伐戦`,
		},
	},

	// Stia LTUQ
	[`Happy Rappy Rumble: Stia`]: {
		type: EventType.STIA,
		name: {
			en: `Happy Rappy Rumble: Stia`,
			jp: `ハッピーラッピー大作戦：スティア`,
		},
	},
};
