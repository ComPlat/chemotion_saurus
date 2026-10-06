#!/usr/bin/env node
/**
 * Docusaurus always copies static/ verbatim into build/, but any asset
 * referenced from MDX (via require() or a root-absolute /img/... markdown
 * image) is *also* emitted separately as a content-hashed file under
 * build/assets/. That makes build/img/ almost entirely redundant: most of
 * what's in it either duplicates a build/assets/ file or is referenced by
 * nothing in the built output at all.
 *
 * This prunes build/img/ down to only the files actually reachable via a
 * literal /img/... path in the built HTML/JS/CSS (logos, favicon, navbar
 * icon, YouTube thumbnails, and similar assets that bypass the webpack
 * asset pipeline). Everything else in build/img/ is safe to delete: it's
 * either a stale verbatim copy of a file webpack already emitted elsewhere,
 * or genuinely orphaned.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const imgDir = path.join(buildDir, 'img');

if (!fs.existsSync(imgDir)) {
  console.log('prune-build-img: build/img not found, nothing to do');
  process.exit(0);
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
}

function collectReferencedImgPaths(dir, refs) {
  const exts = new Set(['.html', '.js', '.json', '.css']);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectReferencedImgPaths(full, refs);
      continue;
    }
    if (!exts.has(path.extname(entry.name))) continue;
    const text = fs.readFileSync(full, 'utf8');
    const re = /\/img\/[A-Za-z0-9_./@%-]+\.(?:png|jpe?g|gif|svg|webp|webm|mp4|ico)/g;
    let m;
    while ((m = re.exec(text))) {
      refs.add(m[0].replace(/^\/img\//, ''));
    }
  }
}

const referenced = new Set();
collectReferencedImgPaths(buildDir, referenced);

const allFiles = [];
walk(imgDir, allFiles);

let removedCount = 0;
let removedBytes = 0;
for (const f of allFiles) {
  const rel = path.relative(imgDir, f);
  if (referenced.has(rel)) continue;
  removedBytes += fs.statSync(f).size;
  fs.unlinkSync(f);
  removedCount++;
}

// remove now-empty directories, deepest first
function removeEmptyDirs(dir) {
  let isEmpty = true;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!removeEmptyDirs(full)) isEmpty = false;
    } else {
      isEmpty = false;
    }
  }
  if (isEmpty && dir !== imgDir) {
    fs.rmdirSync(dir);
    return true;
  }
  return isEmpty;
}
removeEmptyDirs(imgDir);

console.log(
  `prune-build-img: removed ${removedCount} files (${(removedBytes / 1048576).toFixed(1)} MB), kept ${referenced.size} referenced files`
);
