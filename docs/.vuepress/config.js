module.exports = {
    title: '路某人',
    description: '纸上得来终觉浅，绝知此事要躬行。',
    themeConfig: {
        repo: 'https://github.com/YoungLightMing/YoungLightMing.github.io',
        nav: [
            { text: '首页', link: '/' },
            { text: '技术积累', link: '/technic/' },
            { text: '33 个 JS 核心概念 ', link: '/33day/' },
            { text: '我的书单', link: '/book/' },
        ],
        sidebar: {
            '/technic/': [
                '/technic/',
                // {
                //     title: 'JavaScript 系列',
                //     children: [
                        
                //     ]
                // },
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
            '/33day/': [
                '/33day/',
                '/33day/number1',
                '/33day/number2',
                '/33day/number3',
                '/33day/number4',
                '/33day/number5',
                '/33day/number6',
                '/33day/number7',
                '/33day/number8',
                '/33day/number9',
                // '/33day/number10',
                // '/33day/number11',
                // '/33day/number12',
                // '/33day/number13',
                // '/33day/number14',
                // '/33day/number15',
                // '/33day/number16',
                // '/33day/number17',
                // '/33day/number18',
                // '/33day/number19',
                // '/33day/number20',
                // '/33day/number21',
                // '/33day/number22',
                // '/33day/number23',
                // '/33day/number24',
                // '/33day/number25',
                // '/33day/number26',
                // '/33day/number27',
                // '/33day/number28',
                // '/33day/number29',
                // '/33day/number30',
                // '/33day/number31',
                // '/33day/number32',
                // '/33day/number33',
            ],
            '/book/': [
                '/book/',
                // {
                //     title: '软技能',
                //     children: [

                //     ]
                // },
                // {
                //     title: '好文分享',
                //     children: [

                //     ]
                // }
            ]    
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
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
      ]
}