a Cloudflare Worker that scrapes PSO2 NGS urgent quest schedules and posts alerts to Bluesky.

this is a rewrite of [bluesky-ngs-uq-alerts-bot](https://github.com/mary-ext/bluesky-ngs-uq-alerts-bot),
migrating from Deno to Cloudflare Workers for better reliability and scheduling.

## development notes

### project management

- uses pnpm for package management
- run `pnpm run dev` to start a local development server with `--test-scheduled`
- run `pnpm run deploy` to deploy to Cloudflare Workers
- run `pnpm run cf-typegen` to regenerate type definitions for bindings

### code writing

- new files should be in kebab-case
- use tabs for indentation
- use single quotes and add trailing commas
- prefer arrow functions
- use braces for control statements, even single-line bodies
- use bare blocks `{ }` to group related code and limit variable scope
- use template literals for user-facing strings and error messages

### documentation

- documentations include README, code comments, commit messages
- any writing should be in lowercase, except for proper nouns, acronyms and 'I'
- only comment non-trivial code, focusing on _why_ rather than _what_
- write comments and JSDoc in lowercase (except proper nouns, acronyms, and 'I')

### misc

- Claude Code's Bash tool persists directory changes (`cd`) across calls
- the `.research/` directory serves as a workspace for temporary experiments, analysis, and planning
  materials. create it if necessary (it's gitignored). this directory may contain cloned
  repositories or other reference materials that can help inform implementation decisions
- don't make assumptions or speculate about code, plans, or requirements without exploring first;
  pause and ask for clarification when you're still unsure after looking into it
- during plan mode, discuss the plans before finalizing/exiting plan mode to allow for additional
  context or follow-up questions to be provided
