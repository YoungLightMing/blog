module.exports = {
    title: '路某人',
    description: '少一些功利主义的追求，多一些不为什么的坚持。',
    themeConfig: {
        repo: 'https://github.com/YoungLightMing/YoungLightMing.github.io',
        nav: [
            { text: '首页', link: '/' },
            { text: '技术积累', link: '/technic/' },
            { text: '生活随笔', link: '/life/' },
            // { text: '碎碎念', link: '/thinks/' },
            { text: '关于我', link: '/about/' }
        ],
        sidebar: {
            '/technic/': [
                '/technic/',
                {
                    title: '33 个 js 核心概念',
                    children: [
                        '/technic/33day/number1',
                        '/technic/33day/number2',
                        '/technic/33day/number3',
                        '/technic/33day/number4',
                        '/technic/33day/number5',
                        '/technic/33day/number6',
                        '/technic/33day/number7',
                        '/technic/33day/number8',
                        '/technic/33day/number9',
                        '/technic/33day/number10',
                        '/technic/33day/number11',
                        '/technic/33day/number12',
                        '/technic/33day/number13',
                        '/technic/33day/number14',
                        '/technic/33day/number15',
                        '/technic/33day/number16',
                        '/technic/33day/number17',
                        '/technic/33day/number18',
                        '/technic/33day/number19',
                        '/technic/33day/number20',
                        '/technic/33day/number21',
                        '/technic/33day/number22',
                        '/technic/33day/number23',
                        '/technic/33day/number24',
                        '/technic/33day/number25',
                        '/technic/33day/number26',
                        '/technic/33day/number27',
                        '/technic/33day/number28',
                        '/technic/33day/number29',
                        '/technic/33day/number30',
                        '/technic/33day/number31',
                        '/technic/33day/number32',
                        '/technic/33day/number33'
                    ]
                },
                {
                    title: 'ES6 系列',
                    children: [
                        '/technic/ES6/认识Promise'
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        '/technic/CSS/BFC'
                    ]
                },
                {
                    title: '开发工具系列',
                    children: [
                        '/technic/devTools/gulp使用指南',
                        '/technic/devTools/在线API工具——eolinker'
                    ]
                },
                {
                    title: '常用工具函数',
                    children: [
                        '/technic/toolsFun/jsonp跨域',
                        '/technic/toolsFun/节流与防抖',
                        '/technic/toolsFun/通用事件监听',
                        '/technic/toolsFun/call,bind,apply',
                        '/technic/toolsFun/Ajax请求',
                        '/technic/toolsFun/promise重写',
                        '/technic/toolsFun/对象深拷贝',
                        '/technic/toolsFun/数组扁平化',
                        '/technic/toolsFun/数组去重',
                    ]
                }
            ],
            '/life/': [
                '/life/',
                {
                    title: '随想',
                    children: [
                        '/life/post/说给自己听',
                        '/life/post/记一个有趣的寒假',
                        '/life/post/月是故乡明'
                    ]
                },
                {
                    title: '游记',
                    children: [
                        '/life/tour/毕业旅行',
                        '/life/tour/初见北京'
                    ]
                },
                {
                    title: '故事',
                    children: [
                        '/life/story/寻车'
                    ]
                },
                {
                    title: '生活总结',
                    children: [
                        '/life/summary/回首 2018 ',
                        '/life/summary/2018 11 月总结',
                        '/life/summary/2018 10 月总结',
                        '/life/summary/2018 9 月总结',
                        '/life/summary/2018 7 月总结',
                        '/life/summary/2018 6 月总结',
                        '/life/summary/2018 5 月总结',
                        '/life/summary/2018 3 月总结',
                        '/life/summary/2018 1 月总结',
                        '/life/summary/2017 12 月总结',
                        '/life/summary/2017 11 月总结',
                        '/life/summary/2017 10 月总结'
                    ]
                },
            ],
        },
        lastUpdated: '最近更新', // string | boolean
    }, //themeConfig
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/blog': {}
    },
    markdown: {
        lineNumbers: true
    },
}