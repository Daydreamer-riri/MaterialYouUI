import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { path } from '@vuepress/utils'
const sidebar = [
    { text: '快速开始', children: ['/guide/README.md'] },
    {
        text: 'Styles',
        children: ['/guide/docs/color.md', '/guide/docs/typescale.md', '/guide/docs/elevation.md'],
    },
    {
        text: '组件',
        children: [
            { text: '基础' },
            '/guide/docs/button.md',
            '/guide/docs/icon.md',
            '/guide/docs/icon-button.md',
            '/guide/docs/FAB.md',
            '/guide/docs/extended-FAB.md',
            '/guide/docs/chips.md',
            { text: '布局' },
            '/guide/docs/space.md',
            { text: '展示' },
            '/guide/docs/card.md',
            { text: '指令' },
            '/guide/docs/ripple.md',
        ],
    },
]

export default defineUserConfig({
    // 使用vite模式打包
    bundler: viteBundler({
        // vite 打包工具的选项
        vuePluginOptions: {},
        viteOptions: {
            plugins: [vueJsx()],
            resolve: {
                alias: {
                    '@': './',
                    '@packages': path.resolve('./', 'packages'),
                },
            },
            css: {
                preprocessorOptions: {
                    less: {
                        javascriptEnabled: true,
                    },
                },
            },
        },
    }),
    lang: 'zh-CN',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/img/m3-favicon.ico',
            },
        ],
    ],
    title: 'Material You',
    description: 'A material you components library',
    base: '/',

    // 注册组件
    clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),

    // theme
    theme: defaultTheme({
        repo: 'https://github.com/Daydreamer-riri/MaterialYouUI',
        logo: '/img/m3-favicon.ico',
        sidebar,
        sidebarDepth: 0,
    }),

    // markdown
    markdown: {
        code: {
            lineNumbers: false,
        },
    },

    plugins: [[]],
})
