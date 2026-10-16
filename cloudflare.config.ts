import { bindings, defineConfig, triggers } from 'cf/config';

export default defineConfig({
	worker: {
		name: 'bluesky-ngs-uq-alerts-bot-cf',
		compatibilityDate: '2025-12-21',
		entrypoint: 'src/index.ts',
		observability: {
			enabled: true,
		},
		triggers: [
			triggers.scheduled({
				schedule: '16,18,20,22,25,46,48,50,52,55 * * * *',
			}),
		],
		env: {
			KV: bindings.kv({
				id: '7f3c5e2290a74284839593d19512453a',
			}),
			BLUESKY_JP_PDS: bindings.text('https://bsky.social'),
			BLUESKY_JP_IDENTIFIER: bindings.text('did:plc:fq4cqjaex6ubtaqxe65p66gw'),
			BLUESKY_JP_PASSWORD: bindings.secret(),
			BLUESKY_GL_PDS: bindings.text('https://bsky.social'),
			BLUESKY_GL_IDENTIFIER: bindings.text('did:plc:nvo4hcnaw4pggica7tyln5tc'),
			BLUESKY_GL_PASSWORD: bindings.secret(),
		},
	},
});
