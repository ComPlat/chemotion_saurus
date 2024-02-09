require('dotenv').config();

module.exports = {
  title: 'Chemotion',
  tagline: 'Electronic Laboratory Notebook & Repository for Research Data',
  url: 'https://chemotion.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/logos/favicon.ico',
  trailingSlash: false,
  organizationName: 'Complat', // Usually your GitHub org/user name.
  projectName: 'chemotion_saurus', // Usually your repo name.
  customFields: {
    fund: 'Funded By',
  },
  themeConfig: {
    navbar: {
      title: 'Chemotion',
      logo: {
        alt: 'Chemotion',
        src: 'img/logos/favicon.ico',
      },
      items: [
        {
          label: 'Documentation 📖',
          position: 'left',
          docId: 'welcome',
          type: 'doc',
        },
        {
          label: 'Helpdesk 🤝',
          position: 'right',
          to: '/helpdesk',
        },
        {
          label: 'Chemotion Repository ↗️',
          position: 'right',
          to: 'https://www.chemotion-repository.net/',
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      additionalLanguages: ['ruby'],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {
              // using html to ensure centered alignment
              html: '<p style="text-align:center"><a href="https://github.com/ComPlat/chemotion_ELN">Chemotion ELN Source Code ↗</a></p>',
            },
          ],
        },
        {
          items: [
            {
              html: '<p style="text-align:center"><a href="/about">About Us</a></p>',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chemotion - KIT. Built with Docusaurus.`,
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },

  plugins: [
    '@docusaurus/plugin-sitemap',
    '@docusaurus/plugin-content-pages',
    [
      '@docusaurus/plugin-content-docs',
      {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/ComPlat/chemotion_saurus/edit/main/',
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
        routeBasePath: '/docs',
      },
    ],
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],
};
