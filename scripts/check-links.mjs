import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const outputDirectory = path.resolve(root, '_site');
const baseUrl = '/cs4218-website';
const htmlFiles = [];
const cssFiles = [];
const findings = [];
let checkedReferences = 0;

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await collectFiles(absolutePath);
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(absolutePath);
    } else if (entry.name.endsWith('.css')) {
      cssFiles.push(absolutePath);
    }
  }
}

function isExternal(reference) {
  return reference.startsWith('//')
    || /^[a-z][a-z\d+.-]*:/iu.test(reference);
}

function splitReference(reference) {
  const hashIndex = reference.indexOf('#');
  const withoutHash = hashIndex === -1 ? reference : reference.slice(0, hashIndex);
  const fragment = hashIndex === -1 ? '' : reference.slice(hashIndex + 1);
  const queryIndex = withoutHash.indexOf('?');

  return {
    pathname: queryIndex === -1 ? withoutHash : withoutHash.slice(0, queryIndex),
    fragment,
  };
}

function resolveReference(sourceFile, reference) {
  const { pathname, fragment } = splitReference(reference);
  let target;

  if (!pathname) {
    target = sourceFile;
  } else if (pathname === baseUrl || pathname === `${baseUrl}/`) {
    target = path.join(outputDirectory, 'index.html');
  } else if (pathname.startsWith(`${baseUrl}/`)) {
    target = path.join(outputDirectory, decodeURIComponent(pathname.slice(baseUrl.length + 1)));
  } else if (pathname.startsWith('/')) {
    return { error: `root-absolute path is outside ${baseUrl}` };
  } else {
    target = path.resolve(path.dirname(sourceFile), decodeURIComponent(pathname));
  }

  if (pathname.endsWith('/')) {
    target = path.join(target, 'index.html');
  }

  const relativeTarget = path.relative(outputDirectory, target);
  if (relativeTarget.startsWith('..') || path.isAbsolute(relativeTarget)) {
    return { error: 'target escapes the generated site' };
  }

  return { fragment: decodeURIComponent(fragment), target };
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function validateReference(sourceFile, reference) {
  if (!reference || isExternal(reference)) {
    return;
  }

  checkedReferences += 1;
  const resolved = resolveReference(sourceFile, reference);
  const sourceName = path.relative(outputDirectory, sourceFile);

  if (resolved.error) {
    findings.push(`${sourceName}: ${reference} (${resolved.error})`);
    return;
  }

  if (!(await exists(resolved.target))) {
    findings.push(`${sourceName}: ${reference} (missing target)`);
    return;
  }

  if (!resolved.fragment || !resolved.target.endsWith('.html')) {
    return;
  }

  const targetHtml = await readFile(resolved.target, 'utf8');
  const escapedFragment = resolved.fragment.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
  const fragmentPattern = new RegExp(
    `(?:id|name)=(?:"${escapedFragment}"|'${escapedFragment}')`,
    'u',
  );

  if (!fragmentPattern.test(targetHtml)) {
    findings.push(`${sourceName}: ${reference} (missing fragment)`);
  }
}

await collectFiles(outputDirectory);

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const attributePattern = /\b(?:href|src)\s*=\s*(["'])(.*?)\1/giu;

  for (const match of html.matchAll(attributePattern)) {
    await validateReference(htmlFile, match[2]);
  }
}

for (const cssFile of cssFiles) {
  const css = await readFile(cssFile, 'utf8');
  const urlPattern = /\burl\(\s*(["']?)([^'")]+)\1\s*\)/giu;

  for (const match of css.matchAll(urlPattern)) {
    await validateReference(cssFile, match[2]);
  }
}

if (findings.length > 0) {
  console.error('Generated-link check failed:');
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exitCode = 1;
} else {
  console.log(
    `Generated-link check passed: ${checkedReferences} local references across `
      + `${htmlFiles.length} HTML files and ${cssFiles.length} stylesheets.`,
  );
}
