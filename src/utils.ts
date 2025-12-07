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
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  switch (format) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'YYYY':
      return `${year}`;
    case 'relative':
      // Implement relative date formatting if needed
      return '';
    default:
      throw new Error(`Unknown date format: ${format}`);
  }
}

export function full_date(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
