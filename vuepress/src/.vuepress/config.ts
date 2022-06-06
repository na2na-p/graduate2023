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
                    { text: 'Surveinyance', link: '/works/surveinyance.html' },
                    { text: 'Gomamayo-deno', link: '/works/gomamayo-deno.html' },
                    { text: 'chmodGenerator', link: '/works/chmodGenerator.html' },
                ]
            },
            {
                text: 'Links',
                children: [
                    { text: 'GitHub', link: 'https://github.com/na2na-p' },
                ]
            }
        ]
    })
})