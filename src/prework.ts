import { getCollection } from 'astro:content';


export async function getBlogEntry(lang: string) {
  const blogEntries = await getCollection('blog', entry => entry.id.startsWith(`${lang}/`));
  blogEntries.sort((a, b) => new Date(b.data.updated).getTime() - new Date(a.data.updated).getTime());
  return blogEntries;
}

export async function getCategoryList(lang: string) {
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
