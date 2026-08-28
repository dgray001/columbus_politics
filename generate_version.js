const fs = require('fs');
const path = require('path');

const readme = fs.readFileSync(path.resolve(__dirname, 'README.md'), 'utf8');
const match = readme.match(/## Current Version\s*\n+([^\n]+)/);
if (!match) {
  throw new Error('Could not find "## Current Version" line in README.md');
}
const version = match[1].trim();

const out = `export const version = '${version.replace(/'/g, "\\'")}';\n`;
fs.writeFileSync(path.resolve(__dirname, 'docs/scripts/version.js'), out);
console.log(`docs/scripts/version.js -> ${version}`);
