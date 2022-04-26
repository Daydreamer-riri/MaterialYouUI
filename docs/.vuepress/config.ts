import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

const { path } = require('@vuepress/utils')
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

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    // 使用vite模式打包
    bundler: '@vuepress/vite',
    bundlerConfig: {
        // vite 打包工具的选项
    },
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
    base: '/MaterialYou-UI/',

    // 注册组件
    clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),

    // theme
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'https://www.bilibili.com',
        logo: 'https://lh3.googleusercontent.com/UA4cn84QGMesPZb6pWYU2ny8NhqYA-2m6yKn4D1PEDtNfvIc2SQA11JTWRGU-0R21DVoDKh6REdSHLgTdfcn5xr4a9zWRy5HbRk1WA',
        sidebar,
    },

    // markdown
    markdown: {
        code: {
            lineNumbers: false,
        },
    },

    plugins: [
        [
            '@vuepress/register-components',
            {
                // componentsDir: path.resolve(__dirname, './components/button'),
            },
        ],
    ],
})
