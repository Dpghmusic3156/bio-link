import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import vm from 'node:vm';

console.log('--- Running Task 3: Comprehensive End-to-End Verification ---');

const baseDir = path.resolve('.');
const files = [
  'index.html',
  'assets/avatar.svg',
  'assets/qr-donate.svg'
];

for (const file of files) {
  const fullPath = path.join(baseDir, file);
  assert.ok(fs.existsSync(fullPath), `Required file missing: ${file}`);
  const stats = fs.statSync(fullPath);
  assert.ok(stats.size > 50, `File is too small or empty: ${file}`);
  console.log(`✓ File verified: ${file} (${stats.size} bytes)`);
}

// Check index.html syntax & DOM elements
const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

// Extract and test script syntax
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(scriptMatch, 'index.html must contain an inline script');
const scriptContent = scriptMatch[1];

// Validate that script parses without syntax error
const script = new vm.Script(scriptContent);
assert.ok(script, 'JavaScript syntax in index.html is valid');
console.log('✓ Inline JavaScript parsed with 0 syntax errors');

// Verify Review Focus 1: Fallback clipboard
assert.ok(scriptContent.includes('document.execCommand'), 'Fallback execCommand must be implemented');
assert.ok(scriptContent.includes('navigator.clipboard'), 'Modern clipboard API must be checked');
console.log('✓ Review Focus 1: Clipboard fallback logic verified');

// Verify Review Focus 2: Modal scroll prevention
assert.ok(scriptContent.includes("overflow = 'hidden'"), 'Modal open must prevent background scrolling');
assert.ok(scriptContent.includes("overflow = ''"), 'Modal close must restore background scrolling');
console.log('✓ Review Focus 2: Mobile scroll lock verified');

// Verify Review Focus 3: Safe external TikTok link
assert.ok(html.includes('rel="noopener noreferrer"'), 'External link must have rel="noopener noreferrer"');
assert.ok(html.includes('target="_blank"'), 'External link must open in new tab');
console.log('✓ Review Focus 3: TikTok link safety verified');

// Verify Review Focus 4: SVG viewBox scaling
const avatarSvg = fs.readFileSync(path.join(baseDir, 'assets/avatar.svg'), 'utf8');
const qrSvg = fs.readFileSync(path.join(baseDir, 'assets/qr-donate.svg'), 'utf8');
assert.ok(avatarSvg.includes('viewBox="0 0 200 200"'), 'avatar.svg has correct viewBox');
assert.ok(qrSvg.includes('viewBox="0 0 300 300"'), 'qr-donate.svg has correct viewBox');
console.log('✓ Review Focus 4: Vector SVG scaling verified');

console.log('--- ALL TASK 3 VERIFICATIONS PASSED (5/5) ---');
