# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astrofly is an Astro-based blog theme inspired by Hexo-theme-butterfly. It's a bilingual (Chinese/English) static site generator with comprehensive blog features.

## Essential Commands

```bash
# Development
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Build production site (runs astro check + astro build)
pnpm preview          # Preview production build locally

# Content Management
pnpm newpage          # Generate new blog post with interactive prompts
pnpm sync             # Publish site (currently placeholder)

# Astro CLI
pnpm astro --help     # Get Astro CLI help
```

## Architecture Overview

### Content Structure
- **Bilingual Content**: Posts stored in `src/content/blog/zh-CN/` and `src/content/blog/en/`
- **Content Schema**: Blog posts use structured frontmatter with title, categories, tags, abbrlink, dates
- **Content Collections**: Defined in `src/content.config.ts` using glob loaders

### Key Configuration Files
- `astro.config.mjs`: Main Astro configuration with sitemap and expressive-code integrations
- `src/config.js`: Theme configuration with language-specific settings for menus, layout, SEO
- `src/content.config.ts`: Content collection definitions and schemas
- `ec.config.mjs`: Expressive Code configuration for syntax highlighting

### Component Architecture
- **Layouts**: `src/layout/` - Main page layouts (post, page, archive, etc.)
- **Components**: `src/components/` - Reusable UI components
- **Widgets**: `src/components/widget/` - Modular blog widgets (TOC, author card, announcements)
- **Pages**: `src/pages/` - Route definitions using Astro's file-based routing

### Styling System
- **Preprocessors**: Stylus and SCSS support
- **Global Styles**: Main styles in `src/styles/`
- **Component Styles**: Co-located with components
- **Theme Support**: Dark/light mode switching capability

### Build System
- **Package Manager**: pnpm (lockfile present)
- **Type Checking**: Integrated TypeScript checking with `astro check`
- **Image Processing**: Sharp for image optimization
- **Syntax Highlighting**: Expressive Code with Shiki, includes custom MLIR/LLVM grammar support

## Content Creation Workflow

1. **New Post**: Run `pnpm newpage` and follow prompts
2. **Post Template**: Auto-generated with proper frontmatter structure
3. **Content Location**: Files placed in appropriate language directory
4. **Frontmatter Requirements**: title, categories, abbrlink, date, updated

## Language Support

- **Default Languages**: Chinese (zh-CN) and English (en)
- **Content Separation**: Distinct collections for each language
- **Menu Configuration**: Language-specific menus in `src/config.js`
- **URL Structure**: Language prefixes (`/zh-CN/`, `/en/`)