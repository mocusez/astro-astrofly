import { writeFile } from 'fs/promises';
import { join } from 'path';
import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import type { ExecException } from 'child_process';

const execPromise = promisify(exec);

/**
 * Generate a new blog post with the given title and category
 * @param title - The title of the post
 * @param category - The category of the post (default: '日常笔记')
 */
const generatePost = async (
  title: string = 'My Post',
  category: string = '日常笔记'
): Promise<void> => {
  try {
    const now = new Date();
    // Generate UTC time in format: YYYY-MM-DD HH:mm:ss
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hour = String(now.getUTCHours()).padStart(2, '0');
    const minute = String(now.getUTCMinutes()).padStart(2, '0');
    const second = String(now.getUTCSeconds()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    const abbrlink = randomBytes(2).toString('hex');
    const template = `---
title: ${title}
sticky: 0
cover: 
categories: ${category}
abbrlink: "${abbrlink}"
description: 
date: ${dateStr}
updated: ${dateStr}
tags:
---

Write your content here...
`;
    // Improve filename sanitization - replace invalid chars with hyphens
    const sanitizedTitle = title
      .toLowerCase()
      .replace(/[:\/\\?*"|<>]/g, '-') // Replace Windows/Unix invalid filename chars
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const filePath = join(__dirname, 'content/blog', `${sanitizedTitle}.md`);

    await writeFile(filePath, template, 'utf8');
    console.log(`✨ Created new post: ${filePath}`);
  } catch (error) {
    console.error('Failed to create post:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
};

/**
 * Sync the built site to Cloudflare using rclone
 */
const updateSite = async (): Promise<void> => {
  try {
    // Define your script sync your 'dist' folder
    const command = 'rclone sync dist CF:/test/dist';
    const { stdout, stderr } = await execPromise(command);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    console.error('Failed to update:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
};

// Command type definition
type Command = 'newpage' | 'sync';

const command = process.argv[2] as Command | undefined;
const args = process.argv.slice(3);

switch (command) {
  case 'newpage':
    generatePost(...args);
    break;
  case 'sync':
    updateSite();
    break;
  default:
    console.log('Usage:\n pnpm newpage <title> [category] \n pnpm sync');
}
