import {themes as prismThemes} from 'prism-react-renderer';

const academyLogoLight = 'https://raw.githubusercontent.com/skunkworks-academy/www/refs/heads/main/images/favicon-black.png';
const academyLogoDark = 'https://raw.githubusercontent.com/skunkworks-academy/www/refs/heads/main/images/favicon-white.png';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skunkworks Academy Docs',
  tagline: 'Technical, operational, learning, and publishing documentation for Skunkworks Academy.',
  favicon: academyLogoLight,
  url: 'https://docs.skunkworksacademy.com',
  baseUrl: '/',
  organizationName: 'skunkworks-academy',
  projectName: 'docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/',
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchBarPosition: 'right'
      }
    ]
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/skunkworks-academy/docs/edit/main/'
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'}
      }
    ]
  ],
  themeConfig: {
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
    navbar: {
      title: 'Skunkworks Academy',
      logo: {
        alt: 'Skunkworks Academy',
        src: academyLogoLight,
        srcDark: academyLogoDark,
        href: 'https://skunkworksacademy.com/',
        target: '_self'
      },
      items: [
        {href: 'https://skunkworksacademy.com/', label: 'Home', position: 'left'},
        {href: 'https://skunkworksacademy.com/#site-tree', label: 'Site Tree', position: 'left'},
        {href: 'https://skunkworksacademy.com/catalogue/', label: 'Catalogue', position: 'left'},
        {href: 'https://portal.skunkworksacademy.com/', label: 'Portal', position: 'left'},
        {href: 'https://labs.skunkworksacademy.com/', label: 'Labs', position: 'left'},
        {to: '/', label: 'Docs', position: 'left'},
        {href: 'https://publish.skunkworksacademy.com/', label: 'Publish', position: 'left'},
        {href: 'https://jobs.skunkworksacademy.com/', label: 'Jobs', position: 'left'},
        {href: 'https://github.com/skunkworks-academy/docs', label: 'GitHub', position: 'right'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Learning', items: [
          {label: 'Catalogue', href: 'https://skunkworksacademy.com/catalogue/'},
          {label: 'Portal', href: 'https://portal.skunkworksacademy.com/'},
          {label: 'Labs', href: 'https://labs.skunkworksacademy.com/'}
        ]},
        {title: 'Academy modules', items: [
          {label: 'Docs', to: '/'},
          {label: 'Publish', href: 'https://publish.skunkworksacademy.com/'},
          {label: 'Jobs', href: 'https://jobs.skunkworksacademy.com/'}
        ]},
        {title: 'Source', items: [
          {label: 'GitHub organisation', href: 'https://github.com/skunkworks-academy'},
          {label: 'Documentation repository', href: 'https://github.com/skunkworks-academy/docs'}
        ]}
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skunkworks Academy.`
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula}
  }
};

export default config;
