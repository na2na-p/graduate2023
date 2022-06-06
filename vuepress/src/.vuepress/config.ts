import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/',
    lang: 'ja-JP',
    title: '就職作品プレゼンテーション',
    description: '就職作品プレゼンテーション',
    head: [
        // ['link', { rel: 'icon', href: '/images/icon.webp' }], // TODO
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
    })
})