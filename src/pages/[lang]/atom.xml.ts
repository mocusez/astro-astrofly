import rss  from '@astrojs/rss';
import { getBlogEntry } from '@src/prework';
import { getConfig } from '@src/config';
import type { Language } from '@src/types';

export async function getStaticPaths() {
  const languages: Language[] = ['en', 'zh-CN'];
  return languages.map(lang => ({
    params: { lang },
  }));
}

export async function GET({ params, site }: { params: Record<string, string>; site: URL }) {
  const lang = params.lang as Language;
  const config = getConfig(lang);
  const blogs = await getBlogEntry(lang);
  return rss({
    title: config.title,
    description: config.description,
    site: `${site.origin}/${lang}/`,
    items: blogs.map((post) => ({
      title: post.data.title,
      pubDate: post.data.updated,
      description: post.data.description,
      link: `${site.origin}/${lang}/posts/${post.data.abbrlink}`,
    })),
    customData: `<language>${lang}</language>`
  });
}
