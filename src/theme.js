export const theme = {
    footer:{
        owner: {
            enable: true,
            since: 2019,
        },
        custom_text: 'Test', 
        copyright: true,
    },
    display_mode: 'light',
    avatar: {
        img: "/img/head.jpg",
        effect: false
    },
    error_img: {
        flink: "/img/friend_404.gif",
        post_page: "/img/404.jpg"
    },
    index_img: '/img/kali-2.0_kali-2.0-1920x1080.webp',
    "nav": {
        "logo": null,
        "display_title": true,
        "fixed": false
    },
    "subtitle": {
        "enable": true,
        "effect": true,
        "typed_option": null,
        "source": false,
    },
    "social": {
        "fab fa-github": "https://github.com/mocusez || Github || '#24292e'",
        "fas fa-rss": "/atom.xml || RSS"
    },
    "nav": {
        "logo": null,
        "display_title": true,
        "fixed": false
    },
    "preloader": {
        "enable": false,
        "source": 1,
        "pace_css_url": null
    },
    favicon: "/img/title.jpg",
    "aside": {
        "enable": true,
        "hide": false,
        "button": true,
        "mobile": true,
        "position": "right",
        "display": {
          "archive": true,
          "tag": true,
          "category": true
        },
        "card_author": {
          "enable": true,
          "description": null,
          "button": {
            "enable": false,
            "icon": "fab fa-github",
            "text": "Follow Me",
            "link": "https://github.com/mocusez"
          }
        },
        "card_announcement": {
          "enable": true,
          "content": "开放友链添加，欢迎互换"
        },
        "card_recent_post": {
          "enable": true,
          "limit": 5,
          "sort": "date",
          "sort_order": null
        },
        "card_categories": {
          "enable": true,
          "limit": 8,
          "expand": "none",
          "sort_order": null
        },
        "card_tags": {
          "enable": true,
          "limit": 40,
          "color": false,
          "orderby": "random",
          "order": 1,
          "sort_order": null
        },
        "card_archives": {
          "enable": true,
          "type": "monthly",
          "format": "MMMM YYYY",
          "order": -1,
          "limit": 8,
          "sort_order": null
        },
        "card_webinfo": {
          "enable": true,
          "post_count": true,
          "last_push_date": true,
          "sort_order": null
        },
        "card_post_series": {
          "enable": true,
          "orderBy": "date",
          "order": -1
        }
    },
    "post_meta": {
    "page": {
      "date_type": "created",
      "date_format": "date",
      "categories": true,
      "tags": false,
      "label": true
    },
    "post": {
      "position": "left",
      "date_type": "both",
      "date_format": "date",
      "categories": true,
      "tags": true,
      "label": true
    }
  },
  default_top_img: "https://ak.hypergryph.com/upload/images/20190228/b18b912d69fa0b3d571054c8f5fda5cf.jpg",
  lazyload: {
    enable: true,
    field: 'site',
    placeholder: null,
    blur: false
  },
  toc: {
    post: true,
    page: false,
    number: true,
    expand: false,
    style_simple: false,
    scroll_percent: true
  },
  rightside_item_order: {
    enable: false,
    hide: null,
    show: null
  },
  "waline": {
    "serverURL": "",
    "bg": "mysql",
    "pageview": false,
    "option": null
  }
};