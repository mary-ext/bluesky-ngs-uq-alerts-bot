import type { ComposedPost } from '@atcute/bluesky-threading';
import { publishThread } from '@atcute/bluesky-threading';
import { Client } from '@atcute/client';
import type { Did } from '@atcute/lexicons';
import { PasswordSession, type PasswordSessionData } from '@atcute/password-session';

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

	const stored = await kv.get<PasswordSessionData>(sessionKey, 'json');

	// resumes the stored session if it's still valid, otherwise falls back to a fresh login
	const session = await PasswordSession.login(
		{
			service: credentials.pds,
			identifier: credentials.identifier,
			password: credentials.password,
		},
		{
			session: getMatchingSession(region, credentials, stored),
			async onUpdate(data) {
				// callbacks must not throw
				try {
					return await kv.put(sessionKey, JSON.stringify(data));
				} catch (err) {
					console.error(`[${region}]: failed to persist session`, err);
				}
			},
			async onDelete() {
				try {
					return await kv.delete(sessionKey);
				} catch (err) {
					console.error(`[${region}]: failed to delete session`, err);
				}
			},
		},
	);

	return {
		rpc: new Client({ handler: session }),
		did: session.did,
		handle: session.session.handle,
	};
}

const getMatchingSession = (
	region: Region,
	credentials: BlueskyCredentials,
	stored: PasswordSessionData | null,
): PasswordSessionData | undefined => {
	if (!stored) {
		console.log(`[${region}]: no session found, creating new session`);
		return undefined;
	}

	// a changed PDS or account in the worker config invalidates the stored session
	if (stored.service !== credentials.pds) {
		console.log(`[${region}]: session is for different service, creating new session`);
		return undefined;
	}
	if (credentials.identifier !== stored.handle && credentials.identifier !== stored.did) {
		console.log(`[${region}]: session is for different account, creating new session`);
		return undefined;
	}

	return stored;
};

/** publishes posts to bluesky as a thread */
export async function publishPosts(rpc: Client, did: Did, posts: ComposedPost[]): Promise<void> {
	await publishThread(rpc, { author: did, posts });
}
