import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { path } from '@vuepress/utils'
const sidebar = {
    '/guide/': [
        { text: '快速开始', children: ['/guide/README.md'] },
        {
            text: 'Styles',
            children: [
                {
                    text: '色彩',
                },
                {
                    text: '字体',
                },
            ],
        },
        {
            text: '组件',
            children: [
                {
                    text: '通用',
                },
                {
                    text: 'Button 按钮',
                    sidebarDepth: 1,
                    children: ['/guide/docs/button.md'],
                },
                '/guide/docs/icon.md',
                '/guide/docs/space.md',
            ],
        },
        {
            text: '反馈',
        },
        {
            text: '数据录入',
        },
        {
            text: '数据展示',
        },
        {
            text: '布局',
        },
    ],
}

export default defineUserConfig({
    // 使用vite模式打包
    bundler: viteBundler({
        // vite 打包工具的选项
        vuePluginOptions: {},
        viteOptions: {
            plugins: [vueJsx()],
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
    }),

    // markdown
    markdown: {
        code: {
            lineNumbers: false,
        },
    },

    plugins: [[]],
})
