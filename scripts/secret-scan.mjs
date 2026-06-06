import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ignoredDirs = new Set(['.git', 'node_modules']);
const patterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /ghp_[A-Za-z0-9_]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /xox[baprs]-[A-Za-z0-9-]{20,}/,
  /-----BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    if (ignoredDirs.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

let failed = false;
for (const file of walk(root)) {
  const rel = path.relative(root, file);
  const ext = path.extname(file).toLowerCase();
  if (!['.md', '.json', '.js', '.mjs', '.yml', '.yaml', '.txt', ''].includes(ext)) continue;
  const body = fs.readFileSync(file, 'utf8');
  for (const pattern of patterns) {
    if (pattern.test(body)) {
      console.error(rel + ': possible secret matched ' + pattern);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
