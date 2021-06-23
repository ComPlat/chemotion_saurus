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
  customFields:{
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
                  to: 'docs/eln/videos_eln',
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
              ],
            },
        // right
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   docsPluginId: 'elnID',
        // },
        {
          to: 'blog/newsroom',
          label: 'Newsroom',
          position: 'left',
        }
      ]
    },
    hideableSidebar: true,

    // comment out algolia if you don't want to have a search function
    algolia: {
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      indexName: process.env.INDEX_NAME,
      // appId: process.env.ALGOLIA_APP_ID,
      debug: true,
      placeholder: "Search Under Construction",
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
  ,

//   plugins: [
//   [
//     "@docusaurus/plugin-content-docs",
//     {
//       id: "elnID",
//       showLastUpdateTime: true,
//       showLastUpdateAuthor: true,
//       editUrl:
//             'https://github.com/ComPlat/chemotion_saurus/edit/master/',
//       sidebarPath: require.resolve('./sidebarsELN.js'),
//       path: "docs/eln",
//       routeBasePath: "docs/eln",
//       lastVersion: "current",
//         versions: {
//           current: {
//             label: 'ELN 0.9',
//           },
//           '0.8': {
//             label: 'ELN 0.8',
//             path: 'version-0.8',
//           },
//         }
//       }
//   ]
//   ,
//   [
//     "@docusaurus/plugin-content-docs",
//     {
//       id: "repoID",
//       showLastUpdateTime: true,
//       showLastUpdateAuthor: true,
//       editUrl:
//             'https://github.com/ComPlat/chemotion_saurus/edit/master/',
//       sidebarPath: require.resolve('./sidebarsREPO.js'),
//       path: "docs/repo",
//       routeBasePath: "/docs/repo",
//     },
//   ],
// ]
};
