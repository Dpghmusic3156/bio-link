import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

const baseDir = path.resolve('.');
const indexPath = path.join(baseDir, 'index.html');

console.log('Testing Task 2: index.html...');

assert.ok(fs.existsSync(indexPath), 'index.html must exist');
const html = fs.readFileSync(indexPath, 'utf8');

// HTML structure checks
assert.ok(html.includes('<!DOCTYPE html>'), 'must have <!DOCTYPE html>');
assert.ok(html.includes('tailwindcss'), 'must load tailwindcss');
assert.ok(html.includes('viewport'), 'must contain viewport meta tag');

// Identity & Header checks
assert.ok(html.includes('assets/avatar.svg'), 'must reference assets/avatar.svg');
assert.ok(html.includes('verified-badge'), 'must have verified badge');

// TikTok button checks
assert.ok(html.includes('tiktok.com/@'), 'must contain tiktok link template');
assert.ok(html.includes('target="_blank"'), 'tiktok link must have target="_blank"');
assert.ok(html.includes('rel="noopener noreferrer"'), 'tiktok link must have rel="noopener noreferrer"');

// Donate Modal checks
assert.ok(html.includes('id="donateModal"'), 'must contain #donateModal');
assert.ok(html.includes('id="copyBtn"'), 'must contain #copyBtn for copying account number');
assert.ok(html.includes('assets/qr-donate.svg'), 'must reference assets/qr-donate.svg in modal');
assert.ok(html.includes('openDonateModal'), 'must have openDonateModal function');
assert.ok(html.includes('closeDonateModal'), 'must have closeDonateModal function');
assert.ok(html.includes('copyAccountNumber'), 'must have copyAccountNumber function');

// Fallback clipboard check
assert.ok(html.includes('document.execCommand'), 'must implement fallback clipboard method for in-app browsers');

// Customization comments
assert.ok(html.includes('THAY TÊN'), 'must include clear Vietnamese customization comments');
assert.ok(html.includes('THAY LINK TIKTOK'), 'must include TikTok customization comment');

console.log('PASS: All index.html tests passed.');
