# Release QA Record

Recorded 2026-11-08. This records observed results, not Store acceptance.

## Environment

| Component   | Version       |
| ----------- | ------------- |
| macOS       | 26.7.2, arm64 |
| Raycast     | 2.11.1.0      |
| JW Library  | 15.6          |
| Node.js     | 22.22.2       |
| Raycast API | 2.8.2         |

## Automated Validation

`npm run check` passed in both the working checkout and an isolated clean install:
TypeScript, strict ESLint, all **51 tests**, Prettier, and a distribution build.
Tests use generated, disposable SQLite/filesystem fixtures.
Coverage includes reference bounds and ambiguity; publication and chapter links;
bookmark languages and block anchors; container identity and shared discovery;
malformed/oversized manifests; missing, corrupt, incompatible, and locked
databases; read-only access; timeouts/cancellation; bounded caching; and changes
held in a live SQLite write-ahead log.

A clean offline `npm ci` with lifecycle scripts succeeded using a separate copy
of the genuine npm cache. This does not establish that the latest registry
dependencies are installed. `npm run lint` passed icon, skills, ESLint, and
Prettier validation; its remote schema/author checks failed with `ENOTFOUND`.
The online dependency audit was also blocked by DNS failure.

## Native Raycast Observations

- Automatic container discovery loaded installed publications. A real macOS
  metadata permission restriction exposed a discovery issue; the fix identifies
  the application's preferences filename without reading its contents.
- `rr` showed publication results with **Open in JW Library**.
- **⌘Enter** browsed documents in `rr_X`, including front matter.
- `rr 3` selected chapter 3, “„Ich begann Visionen von Gott zu sehen“”.
- `1Mo 51:1` was rejected; `jo 1:1` explained the Josua/Joel ambiguity.
- A nonexistent search showed a useful no-match state; **⌘R** refreshed data.
- The account screen confirmed author `martin_sakowski`.

### Receiving-App Acceptance After Resuming

The following destinations were opened using the extension's action and then
inspected in the running JW Library window:

| Input             | Observed receiver                                                  |
| ----------------- | ------------------------------------------------------------------ |
| `rr`              | Correct publication contents page                                  |
| `rr 3`            | Chapter 3, with its expected title in the navigation header        |
| `rr_X Titelseite` | Unnumbered title/imprint document                                  |
| `1Mo 1:1-3`       | Genesis 1, with verses 1–3 emphasized and subsequent verses dimmed |

Attaching to the top-level macOS wrapper did not work. Selecting the running
wrapped application's path resolved the UI-controller attachment issue. No
private container identifiers, full local paths, or Bible-text screenshots have
been added to the repository.

The existing local `jw` alias was preserved. Author correction introduced a
second development entry in Raycast; the existing entry remains enabled so the
alias continues working. This is a local development installation detail.
The temporary Capture Window shortcut was removed after capture attempts.

## Limitations and Next Validation

Magazine issues and bookmark paragraph/verse destinations remain unverified in
the receiving app. VoiceOver, dark appearance, another Mac, and the latest
JW Library/SDK remain unverified. No verifiable Store screenshots were exported.
A configured GitHub workflow is present but has not run on GitHub. The public
repository shell exists but is empty. Source transfer will use Git only; the
environment still blocks Git metadata writes and terminal DNS, and the GitHub
CLI credential is invalid. No Store review PR was submitted. Third-party
integration permission remains unresolved; a request is drafted but unsent.
Complete [the release checklist](../RELEASE_CHECKLIST.md) before publishing.
