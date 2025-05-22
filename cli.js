import { writeFile } from 'fs/promises';
import { join } from 'path';
import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

const generatePost = async (title = 'My Post', category = '日常笔记') => {
  try {
    const now = new Date();
    const dateStr = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(/\//g, '-');

    const abbrlink = randomBytes(2).toString('hex');
    const template = `---
title: ${title}
sticky: 0
cover: 
categories: ${category}
abbrlink: ${abbrlink}
description: 
date: ${dateStr}
updated: ${dateStr}
tags:
---

Write your content here...
`;
    // Improve filename sanitization - replace invalid chars with hyphens
    const sanitizedTitle = title.toLowerCase()
      .replace(/[:\/\\?*"|<>]/g, '-') // Replace Windows/Unix invalid filename chars
      .replace(/\s+/g, '-')           // Replace spaces with hyphens
      .replace(/-+/g, '-')            // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');         // Remove leading/trailing hyphens
    
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const filePath = join(__dirname, 'src/content/blog', `${sanitizedTitle}.md`);

    await writeFile(filePath, template, 'utf8');
    console.log(`✨ Created new post: ${filePath}`);
  } catch (error) {
    console.error('Failed to create post:', error);
    console.error('Error details:', error.message);
  }
};


const updateSite = async () => {
  try {
      const command = 'echo Hello'
      const { stdout, stderr } = await execPromise(command);
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
  } catch (error) {
      console.error('Failed to update:', error);
  }
};

const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
    case 'newpage':
        generatePost(...args);
        break;
    case 'sync':
        updateSite();
        break;
    default:
        console.log('Usage:\n pnpm newpage <title> [category] [language] \n pnpm sync');
}