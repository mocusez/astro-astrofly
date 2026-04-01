# Copilot Instructions for Astrofly

Astrofly is an Astro-based blog theme inspired by Hexo-theme-butterfly. It's a bilingual (Chinese/English) static site generator with comprehensive blog features.

## Build, Test, and Lint Commands

```bash
# Development
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Build production site (runs astro check + astro build)
pnpm preview          # Preview production build locally

# Content Management
pnpm newpage <title> [category]  # Generate new blog post with frontmatter
pnpm sync             # Publish site (uses rclone to sync dist/ to Cloudflare)

# Astro CLI
pnpm astro --help     # Get Astro CLI help
pnpm astro check      # TypeScript type checking
```

**Note:** This project uses **pnpm** as the package manager. After cloning, run `pnpm install` and `pnpm approve-builds`.

## High-Level Architecture

### Bilingual Content System

The project supports Chinese (zh-CN) and English (en) with complete separation:

- **Content Collections**: Three separate collections defined in `src/content.config.ts`:
  - `cn_blog`: Chinese posts in `content/blog/zh-CN/`
  - `en_blog`: English posts in `content/blog/en/`
  - `board`: Message board pages in `content/board/`

- **Routing**: Dynamic language-based routing via `src/pages/[lang]/`
  - Pages automatically generate for both languages (`/zh-CN/...` and `/en/...`)
  - Language switcher in menu (defined in `src/config.js`)

- **Configuration**: Language-specific settings in `src/config.js`:
  - Separate `configZhCN` and `configEn` objects
  - Different menus, subtitles, and metadata per language
  - Menu format: `"Label": "/path/ || fas fa-icon"`

### Key Configuration Files

- **`astro.config.mjs`**: Main Astro config with sitemap and expressive-code integrations
- **`src/config.js`**: Theme configuration with language-specific menus, layout, SEO settings
- **`src/content.config.ts`**: Content collection schemas (title, categories, abbrlink, dates)
- **`ec.config.mjs`**: Expressive Code config for syntax highlighting
  - Custom grammars: MLIR and LLVM (loaded from `src/grammer/`)
  - Bilingual code block UI (copy button text)

### Component Organization

- **`src/layout/`**: Page layouts (post, archive, category pages)
- **`src/layout/widget/`**: Modular widgets (TOC, author card, announcements)
- **`src/components/`**: Reusable UI components
- **`src/pages/`**: Route definitions using Astro's file-based routing
- **`src/_scripts/`**: Helper functions organized by type (filters, events, tag helpers)

### Styling System

- **CSS Framework**: Tailwind CSS with `@apply` directives and `@layer` organization
- **Global Styles**: Located in `src/styles/` (CSS files using Tailwind utilities)
- **Waline Integration**: Global SCSS import in `astro.config.mjs` for comment system
- **Theme Switching**: Dark/light mode support via CSS variables and `.dark` class

## Key Conventions

### Content Creation

1. **Creating Posts**: Use `pnpm newpage <title> [category]` which:
   - Generates a markdown file in `content/blog/` (you'll need to move it to the correct language directory)
   - Auto-generates an `abbrlink` (random 4-character hex string for permalinks)
   - Creates frontmatter with UTC timestamps

2. **Required Frontmatter**:
   ```yaml
   title: Post Title
   sticky: 0                    # Pin posts (higher = more prominent)
   cover:                       # Optional cover image path
   categories: Category Name    # String, not array
   abbrlink: "a1b2"            # 4-char hex permalink ID (auto-generated)
   description:                 # Optional excerpt
   date: YYYY-MM-DD HH:mm:ss   # UTC timestamp
   updated: YYYY-MM-DD HH:mm:ss # UTC timestamp
   tags:                        # Optional list
   ```

3. **Content Structure**:
   - Blog posts must go in language-specific directories: `content/blog/zh-CN/` or `content/blog/en/`
   - Filenames should be lowercase with hyphens (auto-sanitized by CLI)
   - Files starting with `_` are ignored by the glob loader

### Routing and Pages

- **Dynamic Routes**: Pages in `src/pages/[lang]/` generate for both languages
- **URL Structure**: 
  - Posts: `/zh-CN/posts/[abbrlink]` or `/en/posts/[abbrlink]`
  - Archives: `/zh-CN/archives/[page]`
  - Categories: `/zh-CN/categories/[category]/[page]`

### Code Syntax Highlighting

- **Custom Languages**: MLIR and LLVM grammars available (TextMate JSON format)
- **Language Aliases**: `C`, `CPP`, `C++` → `cpp`, `assembly` → `asm`
- **Shell Blocks**: Line numbers disabled by default
- **Themes**: light-plus (light mode), dark-plus (dark mode)

### Development Workflow

- **Initial Setup**: If no content exists, run `mv example_content content` to use example posts
- **Content Collections**: Use glob loaders (not filesystem-based), so restart dev server after adding new files
- **Type Checking**: `pnpm build` runs `astro check` before building
- **Image Optimization**: Uses Sharp for automatic image processing

## Project-Specific Notes

- **Site URL**: Configured as `https://mocusez.site` in `astro.config.mjs`
- **CLI Tool**: `cli.ts` handles post generation and site deployment (customize `sync` command for your deployment)
- **FontAwesome**: Integrated globally via `@fortawesome/fontawesome-free` for menu icons
- **Comment System**: Waline client configured (styles imported globally)
