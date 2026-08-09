import type { ComposedPost } from '@atcute/bluesky-threading';
import { publishThread } from '@atcute/bluesky-threading';
import { Client, ClientResponseError, CredentialManager, type AtpSessionData } from '@atcute/client';
import type { Did } from '@atcute/lexicons';

import type { Region } from './posts';

export interface BlueskyCredentials {
	pds: string;
	identifier: string;
	password: string;
}

export interface BlueskyClientOptions {
	region: Region;
	credentials: BlueskyCredentials;
	kv: KVNamespace;
}

/** creates a bluesky client with session persistence via KV */
export async function createBlueskyClient(options: BlueskyClientOptions): Promise<{
	rpc: Client;
	did: Did;
	handle: string;
}> {
	const { region, credentials, kv } = options;
	const sessionKey = `session:${region}`;

	const auth = new CredentialManager({
		service: credentials.pds,
		onSessionUpdate(session) {
			// persist session to KV (fire and forget)
			void kv.put(sessionKey, JSON.stringify(session));
		},
		onExpired() {
			// delete expired session from KV (fire and forget)
			void kv.delete(sessionKey);
		},
	});

	const rpc = new Client({ handler: auth });

	// try to resume existing session
	const storedSession = await kv.get(sessionKey);

	if (storedSession) {
		try {
			const session: AtpSessionData = JSON.parse(storedSession);

			// validate session belongs to the expected account
			if (credentials.identifier !== session.handle && credentials.identifier !== session.did) {
				console.log(`[${region}]: session file is for different account, creating new session`);
			} else {
				console.log(`[${region}]: resuming session`);
				await auth.resume(session);

				return {
					rpc,
					did: auth.session!.did,
					handle: auth.session!.handle,
				};
			}
		} catch (err) {
			if (err instanceof ClientResponseError && err.error === 'ExpiredToken') {
				console.log(`[${region}]: session expired, creating new session`);
			} else {
				console.log(`[${region}]: failed to resume session, creating new session`);
			}
		}
	} else {
		console.log(`[${region}]: no session found, creating new session`);
	}

	// create new session
	await auth.login({ identifier: credentials.identifier, password: credentials.password });

	return {
		rpc,
		did: auth.session!.did,
		handle: auth.session!.handle,
	};
}

/** publishes posts to bluesky as a thread */
export async function publishPosts(rpc: Client, did: Did, posts: ComposedPost[]): Promise<void> {
	await publishThread(rpc, { author: did, posts });
}
