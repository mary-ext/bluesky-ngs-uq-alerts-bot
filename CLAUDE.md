a Cloudflare Worker that scrapes PSO2 NGS urgent quest schedules and posts alerts to Bluesky
accounts for JP and global regions. uses the atcute library for Bluesky API interactions.

## development notes

### project management

- tools like Node.js and pnpm are managed by mise, to run them, use `mise exec -- pnpm ...`
- use wrangler for local development and deployment:
  - `pnpm dev` to start local dev server with scheduled handler testing
  - `pnpm deploy` to deploy to Cloudflare Workers
  - `pnpm cf-typegen` to regenerate worker-configuration.d.ts

### code writing

- new files should be in kebab-case
- use tabs for indentation, spaces allowed for diagrams in comments
- use single quotes and add trailing commas
- prefer arrow functions
- use braces for control statements, even single-line bodies
- use bare blocks `{ }` to group related code and limit variable scope
- use template literals for user-facing strings and error messages

### documentation

- documentations include README, code comments, commit messages, changesets
- any writing should be in lowercase, except for proper nouns, acronyms and 'I'
- only comment non-trivial code, focusing on _why_ rather than _what_
- write comments and JSDoc in lowercase (except proper nouns, acronyms, and 'I')
- add JSDoc comments to new publicly exported functions, methods, classes, fields, and enums
- JSDoc should include proper annotations:
  - use `@param` for parameters (no dashes after param names)
  - use `@returns` for return values
  - use `@throws` for exceptions when applicable
  - keep descriptions concise but informative

### linting and formatting

- `pnpm fmt` to format code with prettier
- `pnpm lint` to lint with oxlint

### working style

- `.research/` directory serves as a workspace for temporary experiments, analysis, and planning
  materials. create if not present (it's gitignored). this directory may contain cloned repositories
  or other reference materials that can help inform implementation decisions
- this document is intentionally incomplete; discover everything else in the repo
- don't make assumptions or speculate about code, plans, or requirements without exploring first;
  pause and ask for clarification when you're still unsure after looking into it
- in plan mode, present the plan for review before exiting to allow for feedback or follow-up
  questions

### Claude Code-specific

- Bash tool persists directory changes (`cd`) across calls; keep track of your current working
  directory when writing relative paths or use absolute paths
- Task tool (subagents for exploration, planning, etc.) may not always be accurate; verify subagent
  findings when needed
