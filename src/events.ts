import { type EventMap, EventType } from './types';

export const glEvents: EventMap = {
	// Concerts
	[`Song of War & Mourning`]: {
		type: EventType.SPECIAL,
		name: {
			en: `Live Concert`,
			jp: `ステージライブ`,
		},
	},
	[`Our Fighting!/Eternal Encore`]: {
		type: EventType.SPECIAL,
		name: {
			en: `Movie Concert: Our Fighting / Eternal Encore`,
			jp: `ムービーライブ: Our Fighting / 永遠のencore`,
		},
	},
	[`We're Arks/Rare Drop☆KOI☆KOI`]: {
		type: EventType.SPECIAL,
		name: {
			en: `Movie Concert: We're ARKS! / Rare Drop☆KOI☆KOI`,
			jp: `ムービーライブ: We're ARKS! / レアドロ☆KOI☆こい`,
		},
	},
	[`Endless Story/Our Fighting ver. MIYABI`]: {
		type: EventType.SPECIAL,
		name: {
			en: `Movie Concert: Endless Story / Our Fighting ver.MIYABI`,
			jp: `ムービーライブ: 終わりなき物語 / Our Fighting ver.MIYABI`,
		},
	},
	[`Cosmic Twinkle Star/The End of the Light`]: {
		type: EventType.SPECIAL,
		name: {
			en: `Movie Concert: Cosmic twinkle star / The End of the Light`,
			jp: `ムービーライブ: Cosmic twinkle star / 光の果て`,
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
	[`Resonant Twin Shadows Shake the Wetlands`]: {
		type: EventType.AELIO,
		name: {
			en: `Resonant Twin Shadows Shake the Wetlands`,
			jp: `湿原揺るがす共鳴の双影`,
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
	[`Omen of the Planetbreaker D.2`]: {
		type: EventType.RETEM,
		name: {
			en: `Omen of the Planetbreaker D.2`,
			jp: `星滅の予兆D.2`,
		},
	},
	[`Shadow of the Fallen Star`]: {
		type: EventType.RETEM,
		name: {
			en: `Shadow of the Fallen Star`,
			jp: `星落の暗影`,
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

	// Kvaris LTUQ
	[`Planetcrusher Assault D.2`]: {
		type: EventType.KVARIS,
		name: {
			en: `Planetcrusher Assault`,
			jp: `星砕の猛進D.2`,
		},
	},
	[`Pale Flame of the Planetwrecker`]: {
		type: EventType.KVARIS,
		name: {
			en: `Pale Flame of the Planetwrecker`,
			jp: `星壊の白焔`,
		},
	},
	[`Luther, Emergent Created Conqueror`]: {
		type: EventType.KVARIS,
		name: {
			en: `Luther, Emergent Created Conqueror`,
			jp: `現れる創られし覇者【敗者】`,
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
	[`Co-Op Starless Suppression`]: {
		type: EventType.STIA,
		name: {
			en: `Co-Op Starless Suppression Op`,
			jp: `協調型スターレス討伐戦`,
		},
	},
	[`And the Stars Fell`]: {
		type: EventType.STIA,
		name: {
			en: `And the Stars Fell`,
			jp: `星蝕の奔流`,
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
	[`And the Stars Fell D.2`]: {
		type: EventType.STIA,
		name: {
			en: `And the Stars Fell D.2`,
			jp: `星蝕の奔流D.2`,
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
	[`The Umbral-Dyad Quivering Resonance of the Marshlands`]: {
		type: EventType.AELIO,
		name: {
			en: `The Umbral-Dyad Quivering Resonance of the Marshlands`,
			jp: `湿原揺るがす共鳴の双影`,
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
	[`Omen of the Planetbreaker D.2`]: {
		type: EventType.RETEM,
		name: {
			en: `Harbinger of Extinction D.2`,
			jp: `星滅の予兆D.2`,
		},
	},
	[`Shadow of the Fallen Star`]: {
		type: EventType.RETEM,
		name: {
			en: `Shadow of the Fallen Star`,
			jp: `星落の暗影`,
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

	// Kvaris LTUQ
	[`Rampage of the Sunderer D.2`]: {
		type: EventType.KVARIS,
		name: {
			en: `Rampage of the Sunderer D.2`,
			jp: `星砕の猛進D.2`,
		},
	},
	[`The White Flame of the Star Breaker`]: {
		type: EventType.KVARIS,
		name: {
			en: `The White Flame of the Star Breaker`,
			jp: `星壊の白焔`,
		},
	},
	[`Luther, Emergent Created Conqueror`]: {
		type: EventType.KVARIS,
		name: {
			en: `Luther, Emergent Created Conqueror`,
			jp: `現れる創られし覇者【敗者】`,
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
	[`Simultaneous Starless Subjugation`]: {
		type: EventType.STIA,
		name: {
			en: `Simultaneous Starless Subjugation`,
			jp: `協調型スターレス討伐戦`,
		},
	},
	[`The Veil of Stars Descends`]: {
		type: EventType.STIA,
		name: {
			en: `The Veil of Stars Descends`,
			jp: `星蝕の奔流`,
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
	[`The Veil of Stars Descends D.2`]: {
		type: EventType.STIA,
		name: {
			en: `The Veil of Stars Descends D.2`,
			jp: `星蝕の奔流D.2`,
		},
	},
};
