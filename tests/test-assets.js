import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

const baseDir = path.resolve('.');
const avatarPath = path.join(baseDir, 'assets', 'avatar.svg');
const qrPath = path.join(baseDir, 'assets', 'qr-donate.svg');

console.log('Testing Task 1: Assets...');

assert.ok(fs.existsSync(avatarPath), 'assets/avatar.svg must exist');
const avatarContent = fs.readFileSync(avatarPath, 'utf8');
assert.ok(avatarContent.includes('<svg'), 'assets/avatar.svg must be an SVG file');
assert.ok(avatarContent.includes('viewBox='), 'assets/avatar.svg must have a viewBox');

assert.ok(fs.existsSync(qrPath), 'assets/qr-donate.svg must exist');
const qrContent = fs.readFileSync(qrPath, 'utf8');
assert.ok(qrContent.includes('<svg'), 'assets/qr-donate.svg must be an SVG file');
assert.ok(qrContent.includes('viewBox='), 'assets/qr-donate.svg must have a viewBox');

console.log('PASS: All asset tests passed.');
