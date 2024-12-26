import rss  from '@astrojs/rss';
import { getBlogEntry } from '@src/prework';
import { getConfig } from '@src/config';

export async function getStaticPaths() {
  const languages = ['en', 'zh-CN']; // 添加您支持的语言列表
  return languages.map(lang => ({
    params: { lang },
  }));
}

export async function GET({ params, site }) {
  const lang = params.lang;
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
