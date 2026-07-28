import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const ignoredDirectories = new Set(['.git', 'node_modules', '_site']);
const ignoredFiles = new Set(['audit-independence.mjs', 'package-lock.json']);
const textExtensions = new Set([
  '.css', '.html', '.js', '.json', '.md', '.mjs', '.njk', '.svg', '.txt', '.yml', '.yaml',
]);

const forbiddenPatterns = [
  ['legacy module code', /\b(?:CS2103T?|CS2113|TEE3201|TIC2002)\b/i],
  ['legacy repository or organisation', /nus-cs2103|github\.com\/nus-cs2103/i],
  ['legacy analytics', /UA-122519234-1|googletagmanager|googleAnalytics/i],
  ['legacy search service', /\balgolia\b|3DU4XTBX4T/i],
  ['legacy LMS or faculty endpoint', /canvas\.nus|comp\.nus\.edu\.sg\/~cs2103/i],
];

const findings = [];

async function scanDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '.DS_Store') {
      continue;
    }

    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(root, absolutePath);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        await scanDirectory(absolutePath);
      }
      continue;
    }

    if (ignoredFiles.has(entry.name) || !textExtensions.has(path.extname(entry.name))) {
      continue;
    }

    const contents = await readFile(absolutePath, 'utf8');
    const lines = contents.split(/\r?\n/u);

    lines.forEach((line, index) => {
      forbiddenPatterns.forEach(([label, pattern]) => {
        if (pattern.test(line)) {
          findings.push(`${relativePath}:${index + 1}: ${label}`);
        }
      });
    });
  }
}

await scanDirectory(root);

if (findings.length > 0) {
  console.error('Independence audit failed:');
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exitCode = 1;
} else {
  console.log('Independence audit passed: no legacy course, analytics, search, LMS, or repository markers found.');
}
