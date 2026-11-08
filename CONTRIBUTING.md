# Contributing

Use Node.js 22.22.2 or later with Raycast installed on macOS. Publication and
bookmark queries require the macOS `sqlite3` executable and local JW Library data.

```bash
npm ci
npm run dev
```

Run the checks before submitting changes:

```bash
npm run check
npm run lint
npm audit --audit-level=moderate
```

The build writes a distributable extension to `dist/`; development mode installs
the command in Raycast. Linting validates the manifest and icons and needs network
access to Raycast's schema and author API. `npm run check` runs TypeScript,
ESLint with zero warnings, tests, Prettier verification, and the distribution
build. `npm run lint:code` runs ESLint alone; `npm run format` applies formatting.
The local check does not replace Store metadata validation.

The scoped `minimatch@^10` override uses the patched 11.x API for the CLI and
linting dependencies affected by [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).
It preserves the separate 5.x dependency used by the template tooling. Remove
the override once those upstream dependencies adopt a patched version.

Tests use Node's built-in test runner and the existing TypeScript compiler to
check reference bounds, publication links, bookmark languages and anchors, and
asynchronous data loading against synthetic SQLite/filesystem fixtures. They
exercise cancellation, timeouts, busy databases, and cache invalidation, including
live write-ahead logs. No personal databases are included. In Raycast, also check
Bible links, `m`, `s keyword`, `b`, and `it_X kingdom`, including missing local data.
Bible and meeting links work without a local publications directory. Database
queries use SQLite read-only mode.

Keep packaged artwork under `assets/`; icon paths in the manifest and command
are relative to that directory.

## Store Submission

`npm run prepare:store` writes the Store source to `dist/store/` using an explicit
file list. It keeps `AGENTS.md`, this contributor guide, the standalone repository
license, and developer tools in this source repository. Lightweight tests and the
runtime provenance notice remain in the Store source. The README stays user-facing.

`npm run publish` prepares that export before invoking Raycast's publishing CLI
from it. Never invoke the publishing CLI directly from this repository root:
it copies repository-only files as well. Publishing requires network access and
GitHub authentication; Raycast must review and accept the PR before publication.
For an existing submission, apply the exported files to its Git branch and push
through Git. Keep any upstream reviewer edits when synchronizing.

## SQLite Adapter

The process adapter in `src/library.ts` is intentional. In `@raycast/utils` 2.3.3,
the public `executeSQL(path, query)` API has no cancellation, timeout, or output
limit options. Its locked-database workaround can also persist a database copy.
The extension needs abortable reads, bounded execution/output, explicit busy
errors, live WAL invalidation, and no persistent copies of personal bookmarks.
Keep these safeguards until a shared helper supports them. The synthetic SQLite
tests exercise them against real databases; do not replace them with mocks.

## Source Organization

- `src/jw-library-linker.tsx`: Raycast view, search orchestration, and actions.
- `src/library.ts`: container discovery, asynchronous local reads, SQLite, and caching.
- `src/search.ts`, `src/publications.ts`, `src/bookmarks.ts`: parsing and link generation.
- `src/bible-*.ts`: German names and numeric reference bounds.
- `tests/`: Node test suites and synthetic fixtures.
- `assets/`: packaged artwork; `tools/render-icon.swift` regenerates the original icon.

Source is MIT licensed. See [NOTICE.md](NOTICE.md) for provenance and integration
notices. Keep local database files and container identifiers out of contributions.
