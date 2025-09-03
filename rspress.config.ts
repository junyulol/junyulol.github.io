import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
// import { pluginSitemap } from '@rspress/plugin-sitemap';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { defineConfig } from 'rspress/config';

const siteUrl = 'https://junyulol.github.io';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '峻宇茶画苑 (junyu.lol)',
  description: '中国云南古树普洱茶，茶与艺术的融合，茶与生活的融合。',
  head: [
    [ 'meta', { name: 'keyword', content: '中国, 云南, 易武, 古树茶, 普洱茶, 艺术, 生活, China, Yunnan, Yiwu, Ancient tree, Old tree, Pu-erh, Puerh, tea' } ],
  ],
  icon: '/junyu-photoroom.png',
  logoText: 'Jùnyǔ',
  logo: {
    light: '/junyu-photoroom.png',
    dark: '/junyu-photoroom.png',
  },
  mediumZoom: {
    selector: '.rspress-doc img',
  },
  lang: 'en-US',
  locales: [
    {
      lang: 'en-US',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Junyu',
      description: 'Junyu Art Tea Gallery',
    },
    {
      lang: 'zh-CN',
      label: '简体中文',
      title: '峻宇茶画苑',
      description: '峻宇茶画苑',
    },
    {
      lang: 'zh-TW',
      label: '繁體中文',
      title: '峻宇茶畫苑',
      description: '峻宇茶畫苑',
    },
  ],
  themeConfig: {
    nav: [
      {
        text: '🛖 HOME',
        link: '/',
        activeMatch: '^(?:/|/index.html|/(?:zh-CN/|zh-TW/)?index.html)$',
        position: 'left',
      },
      {
        text: '🍵 TEA',
        link: '/tea/',
        activeMatch: '^/(?:zh-CN/|zh-TW/)?tea/',
        position: 'left',
      },
      {
        text: '🎨 ART',
        link: '/art/',
        activeMatch: '^/(?:zh-CN/|zh-TW/)?art/',
        position: 'left',
      },
      {
        text: '🗞️ NEWS',
        link: '/news/',
        activeMatch: '^/(?:zh-CN/|zh-TW/)?news/',
        position: 'left',
      },
      {
        text: '📮 ABOUT',
        link: '/about/',
        activeMatch: '^/(?:zh-CN/|zh-TW/)?about/',
        position: 'left',
      },
    ],
    locales: [
      {
        lang: 'en-US',
        label: 'English',
        outlineTitle: 'Table of Contents',
      },
      {
        lang: 'zh-CN',
        label: '简体中文',
        outlineTitle: '大纲',
      },
      {
        lang: 'zh-TW',
        label: '繁體中文',
        outlineTitle: '大綱',
      },
    ],
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    socialLinks: [
      {
        icon: 'x',
        mode: 'link',
        content: 'https://x.com/gowiden',
      },
    ],
    footer: {
      message: 'lang' === 'zh-CN' ? '© 2025 峻宇茶画苑版权所有' : '© 2025 Jùnyǔ Art Tea Gallery',
    },
  },
  plugins: [
    // pluginSitemap({
    //   siteUrl,
    // }),
  ],
  builderConfig: {
    plugins: [
      pluginSass(),
      pluginGoogleAnalytics({ id: 'G-VZZF6670CZ' }),
    ],
  },
});
