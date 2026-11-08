# Public Release Checklist

Assessment date: 2026-11-08. Engineering preparation is complete locally;
**Store submission remains gated** by the unchecked items below. See
[the QA record](docs/RELEASE_QA.md) for evidence and limitations.

## Completed Preparation

- [x] Open publications, issues, chapters, German Bible references, meetings, and text bookmarks.
- [x] Provide edition choices, search-fill actions, pagination, refresh, Preferences, and open-error feedback.
- [x] Validate Bible bounds and identify ambiguous book aliases.
- [x] Preserve bookmark language and supported anchors; explain unsupported media bookmarks.
- [x] Discover one identified container for both publications and bookmarks, with an explicit override.
- [x] Move local reads out of rendering; cancel stale queries, bound concurrency and memory, and invalidate cached results on database/WAL changes.
- [x] Use read-only SQLite with timeouts, output limits, and actionable error states.
- [x] Add synthetic filesystem/SQLite regression tests without personal data.
- [x] Add strict ESLint, TypeScript, Prettier, a combined local check, and macOS CI.
- [x] Build distributable assets into `dist/` with an original 512 × 512 PNG icon.
- [x] Verify the Raycast account handle `martin_sakowski` in the native account screen.
- [x] Declare macOS support, categories, a Store changelog, and the publishing command.
- [x] Add MIT licensing, provenance notices, setup, troubleshooting, and privacy documentation.
- [x] Verify a clean offline dependency installation using genuine cached packages and lifecycle scripts.
- [x] Check the official extensions repository and open review PRs for JW Library overlap: no exact match found on 2026-11-08. Repeat before submission.
- [x] Exercise native publication search, chapter browsing, exact-number filtering, invalid/ambiguous references, refresh, and no-match recovery.
- [x] Verify actual JW Library destinations for a publication contents page, numbered chapter, unnumbered front matter, and a Bible verse range on the installed version.
- [x] Create the public repository shell at [msakowski/raycast-library-linker](https://github.com/msakowski/raycast-library-linker). It is empty; source transfer must use Git.

## Remaining Release Gates

- [ ] With registry connectivity, update from the tested Raycast API **2.8.2** to the current SDK and reconcile its Node/React type requirements. Re-run all checks and native acceptance after upgrading.
- [ ] Run clean online `npm ci`, `npm audit`, `npm run check`, and `npm run lint`.
      Local code/icon/format checks pass; remote author/schema validation and audit were blocked by DNS. An unreachable check is not a pass.
- [ ] Resolve the integration/distribution permission gate. The reviewed JW Library terms, sections 3 and 4, explicitly restrict certain app integrations and distributed data-extraction tools. A [concrete permission request](docs/JW_LIBRARY_PERMISSION_REQUEST.md) is prepared but unsent. Also confirm provenance for the Alfred-derived source: its local metadata names Martin Sakowski as creator, and no separate upstream license was found locally. The new icon is original and old bookmark artwork has been removed.
- [ ] Export three informative screenshots with Raycast **Capture Window** into `metadata/`: publication search, chapter browsing, and bookmarks with non-personal sample data. Use **2000 × 1250 PNG**, and inspect both appearance and privacy. Automated capture did not produce a verifiable file.
- [ ] Verify remaining received destinations in JW Library: magazine issues and text bookmark paragraph/verse anchors. Publication contents, numbered/unnumbered documents, and a Bible range have passed on the installed version.
- [ ] Exercise a fresh setup on another supported Apple silicon Mac, including absent JW Library, no downloads, and denied permissions.
- [ ] Check keyboard-only navigation, VoiceOver, long titles, large libraries, light/dark appearances, and open-error recovery in Raycast.
- [ ] Create the initial Git commit after reviewing staged contents; repository metadata writes are currently restricted in this environment.
- [ ] Connect the repository to GitHub and verify an actual green Actions run. The workflow has not run remotely.

The resumed Git-only release attempt confirmed three environment blockers:
`git commit` cannot create `.git/index.lock` (`Operation not permitted`),
`git ls-remote` cannot resolve `github.com`, and `gh auth status` reports an
invalid CLI credential. npm registry requests likewise fail with `ENOTFOUND`.
These require environment access/authentication changes before committing,
pushing, upgrading dependencies, running online checks, or submitting the review.

## Submission and Maintenance

- [ ] Recheck Store overlap and complete the gates above before `npm run publish`.
      Publishing creates a GitHub review PR and requires network access and GitHub authentication.
- [ ] Respond to Raycast review feedback and verify the accepted build.
- [ ] Monitor reports, add synthetic regressions for confirmed bugs, and recheck local data compatibility after JW Library updates.

## References

- [Raycast Store preparation](https://developers.raycast.com/basics/prepare-an-extension-for-store)
- [Raycast extension guidelines](https://manual.raycast.com/extensions-guidelines)
- [Raycast publishing](https://developers.raycast.com/basics/publish-an-extension)
- [Raycast API changelog](https://developers.raycast.com/misc/changelog)
- [JW Library Mac requirements](https://apps.apple.com/us/app/jw-library/id672417831?platform=mac)
- [JW Library integration terms](https://www.jw.org/en/terms-of-use-jwlibrary/)
