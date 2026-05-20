import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIRS = [
  'src/assets/images/projects',
  'src/assets/images/profile',
];
const EXTS = ['.jpg', '.jpeg', '.png'];

let totalBefore = 0;
let totalAfter = 0;

for (const dir of DIRS) {
  const files = await readdir(dir).catch(() => []);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!EXTS.includes(ext)) continue;

    const src = join(dir, file);
    const before = (await stat(src)).size;

    const pipeline = sharp(src);
    if (ext === '.png') {
      await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer()
        .then(buf => sharp(buf).toFile(src));
    } else {
      await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(src + '.tmp')
        .then(() => import('fs').then(fs => fs.promises.rename(src + '.tmp', src)));
    }

    const after = (await stat(src)).size;
    const pct = Math.round((1 - after / before) * 100);
    totalBefore += before;
    totalAfter += after;
    console.log(`${basename(file).padEnd(30)} ${(before/1024).toFixed(0).padStart(6)} KB → ${(after/1024).toFixed(0).padStart(6)} KB  (${pct > 0 ? '-' : '+'}${Math.abs(pct)}%)`);
  }
}

const saved = totalBefore - totalAfter;
console.log(`\nTotal: ${(totalBefore/1024).toFixed(0)} KB → ${(totalAfter/1024).toFixed(0)} KB  (saved ${(saved/1024).toFixed(0)} KB)`);
