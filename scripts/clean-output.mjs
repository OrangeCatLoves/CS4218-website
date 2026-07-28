import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const outputDirectory = path.resolve(root, '_site');

if (path.basename(outputDirectory) !== '_site'
    || path.dirname(outputDirectory) !== path.resolve(root)) {
  throw new Error(`Refusing to clean an unexpected output directory: ${outputDirectory}`);
}

let removedMarkdownFiles = 0;
let updatedHtmlFiles = 0;

async function cleanGeneratedFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await cleanGeneratedFiles(absolutePath);
    } else if (entry.name.endsWith('.md')) {
      await rm(absolutePath);
      removedMarkdownFiles += 1;
    } else if (entry.name.endsWith('.html')) {
      const html = await readFile(absolutePath, 'utf8');
      const htmlWithLanguage = html.replace('<html>', '<html lang="en-SG">');

      if (htmlWithLanguage !== html) {
        await writeFile(absolutePath, htmlWithLanguage);
        updatedHtmlFiles += 1;
      }
    }
  }
}

await cleanGeneratedFiles(outputDirectory);

for (const generatedSourcePath of ['_markbind', 'scripts', '.gitignore']) {
  await rm(path.join(outputDirectory, generatedSourcePath), {
    force: true,
    recursive: true,
  });
}

// MarkBind 5.5.3 bundles KaTeX font references in markbind.min.css without
// copying the corresponding directory into the generated site.
await cp(
  path.join(root, 'node_modules', '@markbind', 'core-web', 'dist', 'fonts'),
  path.join(outputDirectory, 'markbind', 'fonts'),
  { recursive: true },
);

console.log(
  `Cleaned publishable output: removed ${removedMarkdownFiles} Markdown source files, `
    + `set document language on ${updatedHtmlFiles} pages, removed build-only metadata, `
    + 'and restored bundled font assets.',
);
