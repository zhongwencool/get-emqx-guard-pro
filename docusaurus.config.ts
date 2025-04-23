import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const plugins = [
  tailwindPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
      ],
      createRedirects: function (existingPath: string) {
        // 如果访问 /EMQX-Guard-Pro/index，重定向到 /EMQX-Guard-Pro/
        if (existingPath.includes('/EMQX-Guard-Pro/')) {
          return [
            existingPath.replace('/EMQX-Guard-Pro/', '/EMQX-Guard-Pro/index'),
          ];
        }
        return undefined;
      },
    },
  ],
];

const config: Config = {
  plugins,
  title: 'Guard Documentation',
  tagline: 'The professional monitoring and alerting solution for EMQX clusters',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.emqx.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zhongwencool', // Usually your GitHub org/user name.
  projectName: 'emqx_guard_pro', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-R31D2RQNVN',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Set routeBasePath to empty string to remove /docs/ from URLs
          routeBasePath: '',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Disable dark mode switch
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/emqx-dev-social-card.png',
    metadata: [
      { name: 'description', content: 'EMQX Guard Pro documentation - The professional monitoring and alerting solution for EMQX clusters.' },
      { name: 'keywords', content: 'EMQX, MQTT, IoT, monitoring, alerting, Guard Pro' },
      { name: 'author', content: 'zhongwencool' },
    ],
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'manifest',
          href: '/manifest.webmanifest',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'theme-color',
          content: '#4a89dc',
        },
      },
    ],
    navbar: {
      title: 'Guard',
      logo: {
        alt: 'EMQX Guard Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: "emqx_guard_pro",
        },
        //{ to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/zhongwencool/get-emqx-guard-pro',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            //{
            //  label: 'Stack Overflow',
            //  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //},
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/docusaurus',
            //},
            //{
            //  label: 'X',
            //  href: 'https://x.com/docusaurus',
            //},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zhongwencool',
            },
          ],
        },*/
      ],
      copyright: `Copyright © 2024-${new Date().getFullYear()} 💌 EMQX.DEV`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
