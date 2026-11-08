# JW Library Integration Permission Request

Status: draft; not sent. No distribution permission has been established.

To: DeveloperSupport@jw.org

Subject: Permission request for a free Raycast integration with JW Library for Mac

Hello,

I am developing JW Library Linker, a free, noncommercial, open-source Raycast
extension for macOS. Before distributing it publicly, I would like to request
written permission for the integration described below, or guidance on a
supported integration approach.

The extension reads local publication manifests, document metadata, and bookmark
locations from the user's own JW Library installation. It uses read-only SQLite
queries to offer publication and chapter searches and then opens the selected
location in JW Library using `jwlibrary:///finder` links. Bookmark links preserve
language and supported verse/paragraph anchors. Users' databases, bookmarks,
notes, and highlights are never uploaded or modified. There is no telemetry,
account login, server, or monetization.

The extension displays publication/chapter titles and locally installed cover
images at runtime. The distributed package contains its own original icon and
numeric Bible chapter/verse bounds, but no publication text, downloaded
publications, cover artwork, or personal databases. It clearly identifies itself
as unofficial and does not claim endorsement.

The intended distribution is a public GitHub source repository and the Raycast
Extension Store after Raycast's review. The repository address is
https://github.com/msakowski/raycast-library-linker; the source has not yet been
pushed and no Store submission has been made.

Sections 3 and 4 of the JW Library terms appear relevant to reading local app
metadata and distributing a tool that does so. Could you please confirm whether
you grant permission for this integration and the described distribution? Please
also clarify whether public Store screenshots may show publication/chapter
titles or locally installed cover thumbnails, and whether a documented linking
or metadata API should be used instead.

Thank you,
Martin Sakowski

## Review Basis

- [JW Library terms, sections 3 and 4](https://www.jw.org/en/terms-of-use-jwlibrary/)
  restrict certain integrations and distributed extraction tools; section 3
  provides the developer-support permission-request route.
- [Raycast Store preparation](https://developers.raycast.com/basics/prepare-an-extension-for-store)
  requires checking third-party terms. A free license and read-only access do not
  establish third-party integration permission.

Keep the gate open until written permission or a clearly supported alternative
is established. Record the decision and any conditions without publishing
private correspondence or contact details.
