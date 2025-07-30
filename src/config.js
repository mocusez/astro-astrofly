const configZhCN = {
    title: "Astro Butterfly",
    description: "Astro Butterfly",
    keywords: "Astro Butterfly",
    author: "MocusEZ",
    copy: {
        enable: true,
        copyright: {
            enable: false,
            limit_count: 50
        }
    },
    language: "zh-CN",
    source_dir: "source",
    public_dir: "public",
    tag_dir: "tags",
    archive_dir: "archives",
    category_dir: "categories",
    "subtitle": {
        "enable": true,
        "effect": true,
        "typed_option": null,
        "source": false,
        "sub": [
            "Test1",
            "Test2"
        ]
    },
    menu: {
        "归档": "/zh-CN/archives/ || fas fa-archive",
        "分类": "/zh-CN/categories/ || fas fa-folder-open",
        "友链&私人收藏": "/zh-CN/link/ || fas fa-link",
        "留言板": "/board/ || fas fa-user",
        "语言||fas fa-language": {
            "中文": "/zh-CN/ || fas fa-c",
            "English": "/en/ || fas fa-e"
        },
    },
    aside:{
        card_announcement:{
            content: "开放友链添加，欢迎互换"
        }
    },
    date_format: "YYYY-MM-DD",
    per_page: 10
};

const configEn = {
    title: "Astro Butterfly",
    description: "Astro Butterfly",
    keywords: "Astro Butterfly",
    author: "MocusEZ",
    copy: {
        enable: true,
        copyright: {
            enable: false,
            limit_count: 50
        }
    },
    language: "en",
    source_dir: "source",
    public_dir: "public",
    tag_dir: "tags",
    archive_dir: "archives",
    category_dir: "categories",
    "subtitle": {
        "enable": true,
        "effect": true,
        "typed_option": null,
        "source": false,
        "sub": [
            "Will there is a will, there is a way",
            "Courage and Honor !"
        ]
    },
    menu: {
        "Archives": "/en/archives/ || fas fa-archive",
        "Categories": "/en/categories/ || fas fa-folder-open",
        "Friends & Personal Collection": "/en/link/ || fas fa-link",
        "Board": "/board/ || fas fa-user",
        "Language||fas fa-language": {
            "中文": "/zh-CN/ || fas fa-c",
            "English": "/en/ || fas fa-e"
        },
    },
    aside:{
        card_announcement:{
            content: "Open for adding friend links, welcome to exchange"
        }
    },
    date_format: "YYYY-MM-DD",
    per_page: 10
};

export const getConfig = (language) => {
    switch (language) {
        case 'zh-CN':
            return configZhCN;
        case 'en':
            return configEn;
        default:
            return configZhCN;
    }
};
