import {defaultTheme, defineUserConfig} from 'vuepress-vite';
import {path} from '@vuepress/utils';
import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {containerPlugin} from '@vuepress/plugin-container';

export default defineUserConfig({
  base: '/',
  lang: 'ja-JP',
  title: '就職作品プレゼンテーション',
  description: '就職作品プレゼンテーション',
  head: [
    ['meta', {name: 'robots', content: 'noindex, nofollow, noarchive'}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c'}],
    ['link', {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css'}],
  ],

  // dest: '../docs',

  theme: defaultTheme({
    navbar: [
      {
        text: 'About',
        link: '/',
      },
      {
        text: 'Works',
        children: [
          {text: '作品一覧', link: '/works/'},
          {text: '個々の作品', children: [
            {text: 'このページについて', link: '/works/aboutThis/'},
            {text: 'TwitterライクなWebアプリ', link: '/works/sns-app/'},
            {text: 'Frontend Showcase', link: '/works/frontend-showcase/'},
            {text: '2na2-Discord', link: '/works/2na2-Discord/'},
            {text: 'Gomamayo-deno', link: '/works/gomamayo-deno/'},
            {text: 'フェイストラッカー', link: '/works/faceTracker/'},
            // {text: 'Surveinyance', link: '/works/surveinyance/'},
          ]},
        ],
      },
      {
        text: 'Links',
        children: [
          {text: 'GitHub', link: 'https://github.com/na2na-p'},
          {text: 'Qiita', link: 'https://qiita.com/na2na'},
        ],
      },
    ],
    colorMode: 'auto',
    colorModeSwitch: true,
  }),
  plugins: [
    [
      // @ts-ignore
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
      containerPlugin({
        type: 'tip',
        before: (info: string): string => `<div class="custom-container tip"><i class="fas fa-info"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
        after: (): string => '</div>\n',
      }),
      containerPlugin({
        type: 'warning',
        before: (info: string): string => `<div class="custom-container warning"><i class="fas fa-exclamation-triangle"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
        after: (): string => '</div>\n',
      }),
      containerPlugin({
        type: 'danger',
        before: (info: string): string => `<div class="custom-container danger"><i class="fas fa-exclamation-circle"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
        after: (): string => '</div>\n',
      }),
    ],
  ],
});
