const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tanoshi',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  base: '/tanoshi/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/wPSEftdDqB'
      },
      {
        text: 'Github',
        link: 'https://github.com/faldez/tanoshi'
      }
    ],
    sidebar: {
      '/installation/': [
        {
          title: 'Installations',
          collapsable: false,
          children: [
            '',
            'binary',
            'docker',
            'desktop'
          ]
        },
        {
          title: 'Screenshots',
          path: '/screenshots/'
        },
        {
          title: 'Guide',
          path: '/guide/'
        },
        {
          title: 'Development',
          path: '/development/'
        },
      ],
      '/screenshots/': [
        {
          title: 'Installations',
          path: '/installation/'
        },
        {
          title: 'Screenshots',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Guide',
          path: '/guide/'
        },
        {
          title: 'Development',
          path: '/development/'
        },
      ],
      '/guide/': [
        {
          title: 'Installations',
          path: '/installation/'
        },
        {
          title: 'Screenshots',
          path: '/screenshots/'
        },
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'account',
            'config',
            'extensions',
            'files',
            'notifications'
          ]
        },
        {
          title: 'Development',
          path: '/development/'
        },
      ],
      '/development/': [
        {
          title: 'Installations',
          path: '/installation/'
        },
        {
          title: 'Screenshots',
          path: '/screenshots/'
        },
        {
          title: 'Guide',
          path: '/guide/'
        },
        {
          title: 'Development',
          collapsable: false,
          children: [
            '',
          ]
        },
      ],
    },
    logo: '/assets/tanoshi.png'
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/google-analytics',
    {
      'ga': 'G-1LZNGRN83M'
    }
  ]
}
