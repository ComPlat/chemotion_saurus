require('dotenv').config()

module.exports = {
  title: 'Chemotion',
  tagline:
    'Electronic Laboratory Notebook (ELN) &\n' +
    'Repository for Research Data\n',
  url: 'https://chemotion.net',
  //baseUrl: '/',
  baseUrl: '/chemotionsaurus/',
  onBrokenLinks: 'log',
  // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Complat', // Usually your GitHub org/user name.
  projectName: 'chemotion_saurus', // Usually your repo name.
  customFields: {
    fund: 'Funded By'
  },
  themeConfig: {
    navbar: {
      title: 'Chemotion',
      logo: {
        alt: 'Chemotion',
        src: 'img/favicon.ico',
      },
      items: [
        {
          label: 'Documentation',
          position: 'left',
          items: [
            {
              label: 'ELN',
              to: 'docs/eln/intro',
              // docsPluginId: 'elnID',
              // items:[
              //   {
              //     type: 'docsVersionDropdown',
              //     docsPluginId: 'elnID',
              //   }
              // ]
            },
            {
              label: 'Repository',
              to: 'docs/repo/videos_repo',
              // docsPluginId: 'repoID',
            },
            {
              label: 'About this documentation',
              to: 'docs/docu/Set Up',
              // docsPluginId: 'repoID',
            },
          ],
        },
        {
          to: 'blog/newsroom',
          label: 'Newsroom',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        }
      ]
    },
    hideableSidebar: true,

    // comment out algolia if you don't want to have a search function
    algolia: {
      // for development, put .env file containing ALGOLIA_SEARCH_API_KEY and INDEX_NAME in root of repo
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      indexName: process.env.INDEX_NAME,
      // appId: process.env.ALGOLIA_APP_ID,
      debug: true,
      placeholder: "Search Documentation",
      facetFilters: [],
      // contextualSearch: true --> no results in search bar
      // transformData: function(hits) {
      //   // Transform the list of hits; not working in docusaurus
      // }
    },

    footer: {
      style: 'light',
      links: [
        {
          items: [
            {
              label: 'ELN GitHub',
              to: 'https://github.com/ComPlat/chemotion_ELN'
            },
          ],
        },

        {
          items: [
            {
              label: 'Repository GitHub',
              to: 'https://github.com/ComPlat/chemotion_REPO'
            }
          ],
        },

        {
          items: [
            {
              label: 'Contact Us',
              to: 'about'
            }
          ],
        },

        {
          items: [
            {
              label: 'Admin',
              to: 'admin'
            }
          ],
        },


      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chemotion - KIT. Built with Docusaurus.`,
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs:false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ComPlat/chemotion_saurus/edit/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editCurrentVersion: true,
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
