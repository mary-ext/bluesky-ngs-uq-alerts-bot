// Mainly used just for sorting

export const enum EventType {
	SPECIAL = 0,

	AELIO = 1,
	RETEM = 2,
	KVARIS = 3,
	STIA = 4,
}

export const eventMap = new Map([
	// Concerts
	[`Song of War & Mourning`, EventType.SPECIAL],

	// Aelio UQ
	[`Nex Vera Suppression Op`, EventType.AELIO],
	[`Command DOLLS Suppression Op`, EventType.AELIO],
	[`Mining Rig Defense`, EventType.AELIO],
	[`Dark Falz Interception`, EventType.AELIO],
	[`The Battle of Halphia Lake`, EventType.AELIO],

	// Aelio LTUQ
	[`Flurry of Flowers`, EventType.AELIO],
	[`Happy Rappy Rumble`, EventType.AELIO],
	[`The Second Battle of Halphia Lake`, EventType.AELIO],

	// Retem UQ
	[`Dustyl Vera Suppression Op`, EventType.RETEM],
	[`Renus Vera Suppression Op`, EventType.RETEM],
	[`Mining Rig Defense: Retem`, EventType.RETEM],
	[`Omen of the Planetbreaker`, EventType.RETEM],

	// Retem LTUQ
	[`Haunted Domain`, EventType.RETEM],

	// Kvaris UQ
	[`Crocodylis Vera Suppression Op`, EventType.KVARIS],
	[`Ams Vera Suppression Op`, EventType.KVARIS],
	[`Mining Rig Defense: Kvaris`, EventType.KVARIS],
	[`Remnants of Ambition`, EventType.KVARIS],
	[`Planetcrusher Assault`, EventType.KVARIS],

	// Stia UQ
	[`Nils Vera Suppression Op`, EventType.STIA],
	[`Doldoris Vera Suppression Op`, EventType.STIA],
]);
