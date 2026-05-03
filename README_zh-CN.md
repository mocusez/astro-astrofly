
# Astrofly

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

[English](./README.md) | 简体中文

灵感来源于 [hexo-theme-butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 和 [HsuBlog](https://github.com/KraHsu/HsuBlog)

![image-20241226125647006](README.assets/image-20241226125647006.png)

## 特性

- **Astro v6** — 基于最新 Astro 构建，静态优先，性能卓越
- **双语支持** — 中文 (zh-CN) 和英文内容，支持语言专属路由
- **全文搜索** — 由 [Pagefind](https://pagefind.app/) 驱动的极速静态搜索，支持多语言和移动端优化
- **PWA 支持** — 可安装为渐进式 Web 应用，支持离线访问，构建时自动更新缓存版本
- **Waline 评论** — 集成 [Waline](https://waline.js.org/) 评论系统，支持页面浏览量统计和深色模式
- **Expressive Code** — 由 Shiki 驱动的语法高亮，支持自定义 MLIR/LLVM 语法
- **Tailwind CSS** — 实用优先的样式，支持深色/浅色主题切换
- **站点地图** — 自动生成站点地图，利于 SEO
- **响应式设计** — 移动端友好的布局，自适应导航

## 💻 安装

- Git

  ```bash
  git clone https://github.com/mocusez/astro-astrofly.git blog
  cd blog
  pnpm install
  pnpm approve-builds
  mv example_content content  # 使用示例内容作为你的内容目录
  ```

### 使用模板

```bash
pnpm create astro@latest -- --template mocusez/astro-astrofly
mv example_content content  # 使用示例内容作为你的内容目录
```

## 🧞 命令

所有命令都在项目根目录下的终端中运行：

| 命令                      | 操作                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                         |
| `npm run dev`             | 在 `localhost:4321` 启动本地开发服务器           |
| `npm run build`           | 构建生产环境站点到 `./dist/`                     |
| `npm run preview`         | 在部署前本地预览构建结果                         |
| `npm run astro ...`       | 运行 CLI 命令，如 `astro add`、`astro check`     |
| `npm run astro -- --help` | 获取 Astro CLI 帮助                              |
| `npm run newpage`         | 基于模板生成新文章                               |
| `npm run sync`            | 通过系统脚本发布站点                             |

## 🌍 翻译

欢迎通过 Weblate 贡献翻译！

[![翻译状态](https://hosted.weblate.org/widget/astro-astrofly/astro-astrofly/svg-badge.svg)](https://hosted.weblate.org/projects/astro-astrofly/astro-astrofly/)

访问 [Weblate](https://hosted.weblate.org/projects/astro-astrofly/astro-astrofly/) 帮助将 Astrofly 翻译成您的语言。
