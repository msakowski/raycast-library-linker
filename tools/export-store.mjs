import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Export only runtime files, Store metadata, configuration, and lightweight tests.
// Repository instructions, licenses, contributor docs, and tools stay in source.
const root = fileURLToPath(new URL("../", import.meta.url));
const destination = join(root, "dist", "store");
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const name of [
  "src",
  "assets",
  "metadata",
  "tests",
  "README.md",
  "NOTICE.md",
  "CHANGELOG.md",
  "package-lock.json",
  "tsconfig.json",
  "eslint.config.mjs",
  ".prettierrc.json",
  ".prettierignore",
  ".gitignore",
]) {
  await cp(join(root, name), join(destination, name), { recursive: true });
}
const manifest = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
manifest.scripts.publish = "npx @raycast/api@latest publish";
delete manifest.scripts["prepare:store"];
await writeFile(join(destination, "package.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`Prepared Store source at ${destination}`);
