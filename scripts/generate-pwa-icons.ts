import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { resolve } from 'path';

const INPUT = resolve(import.meta.dirname, '../public/favicon.svg');
const OUTPUT_DIR = resolve(import.meta.dirname, '../public/icons');

mkdirSync(OUTPUT_DIR, { recursive: true });

const sizes = [
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

for (const { name, size } of sizes) {
  await sharp(INPUT)
    .resize(size, size)
    .png()
    .toFile(resolve(OUTPUT_DIR, name));
  console.log(`Generated ${name} (${size}x${size})`);
}

// Maskable icon: add 10% padding (safe zone)
const maskableSize = 512;
const innerSize = Math.round(maskableSize * 0.8);
const offset = Math.round((maskableSize - innerSize) / 2);

const inner = await sharp(INPUT)
  .resize(innerSize, innerSize)
  .png()
  .toBuffer();

await sharp({
  create: {
    width: maskableSize,
    height: maskableSize,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
})
  .composite([{ input: inner, left: offset, top: offset }])
  .png()
  .toFile(resolve(OUTPUT_DIR, 'icon-512x512-maskable.png'));

console.log(`Generated icon-512x512-maskable.png (${maskableSize}x${maskableSize}, maskable)`);
console.log('Done!');
