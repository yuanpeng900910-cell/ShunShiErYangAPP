import { cpSync, mkdirSync, rmSync, copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
copyFileSync('index.html', `${dist}/index.html`);
cpSync('src', `${dist}/src`, { recursive: true });
console.log('Built static visual demo to dist/');
