import { defineEcConfig } from 'astro-expressive-code'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginFramesTexts } from '@expressive-code/plugin-frames'

import fs from 'node:fs'

pluginFramesTexts.addLocale('zh-CN',{
  copyButtonTooltip: '点击复制',
  copyButtonCopied: '复制成功!'
})

pluginFramesTexts.addLocale('en', {
    copyButtonTooltip: 'Copy',
    copyButtonCopied: 'Copied!'
})

export default defineEcConfig({
  defaultLocale: 'zh-CN',
  supportedLocales: ['zh-CN', 'en'],
  plugins: [ pluginLineNumbers(), pluginCollapsibleSections()],
  shiki: {
    langs: [
      JSON.parse(fs.readFileSync('./src/grammer/mlir.json', 'utf-8')),
      JSON.parse(fs.readFileSync('./src/grammer/llvm.json', 'utf-8')),
    ],
    langAlias: {
      C: 'c',
      CPP: 'cpp',
      'c++': 'cpp',
      assembly: 'asm',
    }
  },
  themes: ['light-plus','dark-plus'],
  themeCssSelector:() => `.dark`,
  useDarkModeMediaQuery: false,
  defaultProps: {
    overridesByLang: {
      'shell': {
        showLineNumbers: false,
      }
    }
  }
})