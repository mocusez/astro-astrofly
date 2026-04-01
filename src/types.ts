import type { CollectionEntry } from 'astro:content';

export type Language = 'zh-CN' | 'en';

export type BlogPostData = CollectionEntry<'cn_blog'>['data'];

export interface PostHeading {
  depth: number;
  slug: string;
  text: string;
}

export interface SubtitleConfig {
  enable: boolean;
  effect: boolean;
  typed_option: null | Record<string, unknown>;
  source: boolean;
  sub: string[];
}

export interface SiteConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
  copy: {
    enable: boolean;
    copyright: {
      enable: boolean;
      limit_count: number;
    };
  };
  copyright?: string;
  root?: string;
  language: Language;
  source_dir: string;
  public_dir: string;
  tag_dir: string;
  archive_dir: string;
  category_dir: string;
  subtitle: SubtitleConfig;
  menu: Record<string, string | Record<string, string>>;
  aside: {
    card_announcement: {
      content: string;
    };
  };
  date_format: string;
  per_page: number;
}

export interface ThemeConfig {
  footer: {
    owner: { enable: boolean; since: number };
    custom_text: string;
    copyright: boolean;
  };
  display_mode: string;
  avatar: {
    img: string;
    effect: boolean;
  };
  error_img: {
    flink: string;
    post_page: string;
  };
  index_img: string;
  disable_top_img?: boolean;
  archive_img?: string | false;
  category_img?: string | false;
  category_per_img?: Record<string, string>;
  tag_img?: string | false;
  tag_per_img?: Record<string, string>;
  photofigcaption?: boolean;
  rightside_scroll_percent?: boolean;
  nav: {
    logo: string | null;
    display_title: boolean;
    fixed: boolean;
  };
  subtitle: SubtitleConfig;
  social: Record<string, string>;
  preloader: {
    enable: boolean;
    source: number;
    pace_css_url: string | null;
  };
  favicon: string;
  aside: {
    enable: boolean;
    hide: boolean;
    button: boolean;
    mobile: boolean;
    position: string;
    display: {
      archive: boolean;
      tag: boolean;
      category: boolean;
    };
    card_author: {
      enable: boolean;
      description: string | null;
      button: {
        enable: boolean;
        icon: string;
        text: string;
        link: string;
      };
    };
    card_announcement: {
      enable: boolean;
      content: string;
    };
    card_recent_post: {
      enable: boolean;
      limit: number;
      sort: string;
      sort_order: string | null;
    };
    card_categories: {
      enable: boolean;
      limit: number;
      expand: string;
      sort_order: string | null;
    };
    card_tags: {
      enable: boolean;
      limit: number;
      color: boolean;
      orderby: string;
      order: number;
      sort_order: string | null;
    };
    card_archives: {
      enable: boolean;
      type: string;
      format: string;
      order: number;
      limit: number;
      sort_order: string | null;
    };
    card_webinfo: {
      enable: boolean;
      post_count: boolean;
      last_push_date: boolean;
      runtime_date?: string;
      sort_order: string | null;
    };
    card_post_series: {
      enable: boolean;
      orderBy: string;
      order: number;
    };
  };
  post_meta: {
    page: {
      date_type: string;
      date_format: string;
      categories: boolean;
      tags: boolean;
      label: boolean;
    };
    post: {
      position: string;
      date_type: string;
      date_format: string;
      categories: boolean;
      tags: boolean;
      label: boolean;
    };
  };
  default_top_img: string;
  lazyload: {
    enable: boolean;
    field: string;
    placeholder: string | null;
    blur: boolean;
  };
  toc: {
    post: boolean;
    page: boolean;
    number: boolean;
    expand: boolean;
    style_simple: boolean;
    scroll_percent: boolean;
  };
  rightside_item_order: {
    enable: boolean;
    hide: string | null;
    show: string | null;
  };
  waline: {
    serverURL: string;
    bg: string;
    pageview: boolean;
    option: Record<string, unknown> | null;
  };
}
