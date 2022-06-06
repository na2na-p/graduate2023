import { defaultTheme, defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
    base: '/',
    lang: 'ja-JP',
    title: '就職作品プレゼンテーション',
    description: '就職作品プレゼンテーション',
    head: [
        ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive' }],
    ],

    dest: '../docs',

    theme: defaultTheme({
        navbar: [
            {
                text: 'About',
                link: '/',
            },
            {
                text: 'Works',
                children: [
                    { text: 'このページについて', link: '/works/aboutThisPage.html' },
                    { text: 'Surveinyance', link: '/works/surveinyance/' },
                    { text: 'Gomamayo-deno', link: '/works/gomamayo-deno/' },
                    { text: 'chmodGenerator', link: '/works/chmodGenerator/' },
                ]
            },
            {
                text: 'Links',
                children: [
                    { text: 'GitHub', link: 'https://github.com/na2na-p' },
                    { text: 'vuepressGuide(とりあえず)', link: '/guide' },
                ]
            }
        ]
    }),
  plugins: [
    registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
  ],
})