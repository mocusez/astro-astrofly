// export function urlFor(path: string): string {
//     // const baseUrl = import.meta.env.BASE_URL || '/';
//     // const baseUrl = '/';
//     // return new URL(path, baseUrl).toString();
//     const baseUrl = 'http://localhost:4322';
//     console.log('urlFor');
//     try {
//         return new URL(path, baseUrl).toString();
//     } catch (error) {
//         console.error('Invalid URL:', error);
//         throw new TypeError('Invalid URL');
//     }
    
// }

export function getBgPath(bg_img:string): string {
    return `background-image: url(${bg_img})`;
}


import zhCN from './language/zh-cn.json';
import en from './language/en.json';
type LocaleData = {
    [key: string]: any;
};

export function useTranslations(lang:string) {
  const localeData: LocaleData = lang === 'zh-CN' ? zhCN : en;
  return function t(path: string) {
    const keys = path.split('.');
    let result: any = localeData;
    for (const key of keys) {
      if (result[key] !== undefined) {
        result = result[key];
      } else {
        return path; // 如果路径不存在，则返回路径本身
      }
    }  
    return result;
  }
}

export function is_home(url:URL): boolean {
  return /^\/(zh-CN|en)(\/\d+)?\/?$/.test(url.pathname);
}

export function is_post(url:URL): boolean {
  return url.pathname.includes('/posts/');
}

export function is_category(url:URL): boolean {
  return url.pathname.includes('/categories/');
}

export function is_archive(url:URL): boolean {
  return url.pathname.includes('/archives/');
}

export function date_xml(date: Date): string {
  return date.toISOString();
}

export function date(date: Date, format: string): string {
  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'YYYY-MM-DD':
      options.year = 'numeric';
      options.month = '2-digit';
      options.day = '2-digit';
      break;
    case 'YYYY':
      options.year = 'numeric';
    case 'relative':
      // Implement relative date formatting if needed
      break;
    default:
      throw new Error(`Unknown date format: ${format}`);
  }

  return new Intl.DateTimeFormat('zh-CN', options).format(date);
}

export function full_date(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  return new Intl.DateTimeFormat('zh-CN', options).format(date);
}
