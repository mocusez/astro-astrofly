/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Colors mapped from var.styl
      colors: {
        // Theme colors
        'theme': {
          DEFAULT: '#49B1F5',
          'blue': '#49B1F5',
          'cyan': '#00c4b6',
          'orange': '#FF7242',
          'red': '#F47466',
        },
        // Font colors
        'font': {
          'black': '#4C4948',
          'color': '#1F2D3D',
        },
        // Greys
        'grey': {
          DEFAULT: '#858585',
          'light': '#EEEEEE',
          'dark': '#cacaca',
        },
        // UI colors
        'sidebar-bg': '#f6f8fa',
        'card-bg': '#ffffff',
        'body-bg': '#ffffff',
        'search-bg': '#f6f8fa',
        'blockquote': {
          'color': '#6a737d',
          'padding': '#49B1F5',
        },
        'table-thead': '#99a9bf',
        'link': '#99a9bf',
        'sticky': '#FF7242',
        'meta': '#858585',
        'toc-link': '#666261',
        // Note colors
        'note': {
          'default': '#777',
          'primary': '#6f42c1',
          'info': '#428bca',
          'success': '#5cb85c',
          'warning': '#f0ad4e',
          'danger': '#d9534f',
        },
        // Tag plugin colors
        'tag': {
          'blue': '#428bca',
          'pink': '#FF69B4',
          'red': '#FF0000',
          'orange': '#FF8C00',
          'purple': '#6f42c1',
          'green': '#5cb85c',
        },
      },
      // Font families
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Lato', 'Roboto', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        'code': ['consolas', 'Menlo', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      // Font sizes
      fontSize: {
        'base': '14px',
      },
      // Line heights
      lineHeight: {
        'text': '2',
        'code': '1.6',
      },
      // Spacing
      spacing: {
        'sidebar': '330px',
        'toc-mobile': 'calc(100% - 80px)',
        'rightside-bottom': '40px',
      },
      // Max widths
      maxWidth: {
        'toc-mobile': '380px',
      },
      // Box shadows
      boxShadow: {
        'card': '0 3px 8px 6px rgba(7, 17, 27, .05)',
        'card-hover': '0 3px 8px 6px rgba(7, 17, 27, .09)',
      },
      // Transitions
      transitionDuration: {
        '200': '200ms',
        '500': '500ms',
      },
      // Z-index
      zIndex: {
        'fireworks': '99999',
      },
    },
  },
  plugins: [],
}
