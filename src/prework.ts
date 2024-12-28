import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'cn_blog' | 'en_blog'>;

export async function getBlogEntry(lang: string): Promise<BlogEntry[]> {
    const blogEntries = await (async () => {
        switch(lang) {
            case 'zh-CN':
                return await getCollection('cn_blog');
            case 'en':
                return await getCollection('en_blog');
            default:
                return await getCollection('cn_blog');
        }
    })();
    (blogEntries as BlogEntry[]).sort((a: BlogEntry, b: BlogEntry) => new Date(b.data.updated).getTime() - new Date(a.data.updated).getTime());
    return blogEntries;
}

export async function getCategoryList(lang: string):Promise<{ name: string; path: string; count: number }[]> {
    const categoryMap: { [key: string]: { name: string; path: string; count: number } } = {};
    const blogEntries = await getBlogEntry(lang);
    blogEntries.forEach(entry => {
        const category = entry.data.categories;
        if (category) {
            if (!categoryMap[category]) {
                categoryMap[category] = { name: category, path: `/categories/${category}`, count: 0 };
            }
            categoryMap[category].count += 1;
        }
    });
    return Object.values(categoryMap);
}

export async function getArchiveLength(lang: string):Promise<number> {
    const blogEntries = await getBlogEntry(lang);
    return blogEntries.length;
}
