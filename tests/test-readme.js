import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

const baseDir = path.resolve('.');
const readmePath = path.join(baseDir, 'README.md');

console.log('Testing Task 4: README.md...');

assert.ok(fs.existsSync(readmePath), 'README.md must exist');
const content = fs.readFileSync(readmePath, 'utf8');

assert.ok(content.includes('Vercel'), 'README must explain Vercel deployment');
assert.ok(content.includes('GitHub'), 'README must explain GitHub steps');
assert.ok(content.includes('index.html'), 'README must explain local testing');
assert.ok(content.includes('assets/'), 'README must explain avatar and qr customization');

console.log('PASS: README.md tests passed.');
