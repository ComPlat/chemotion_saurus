require('dotenv').config()

module.exports = {
  title: 'Chemotion',
  tagline:
    'Electronic Laboratory Notebook (ELN) &\n' +
    'Repository for Research Data\n',
  url: 'https://chemotion.net',
  baseUrl: '/chemotionsaurus/',
  onBrokenLinks: 'throw',
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
                },
                {
                  label: 'Repository',
                  to: 'docs/repo/videos_repo',
                },
              ],
            },
        {
          to: 'blog/newsroom',
          label: 'Newsroom',
          position: 'left',
        }
      ],
    },
    hideableSidebar: true,
    // comment out algolia if you don't want to have a search function
    // algolia: {
    //   apiKey: process.env.ALGOLIA_READ_API_KEY,
    //   indexName: process.env.INDEX_NAME,
    //   appId: process.env.ALGOLIA_APP_ID,
    //   //... other Algolia params
    // },
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
              to: 'docs/about'
            }
          ],
        },

        {
          items: [
            {
              label: 'Admin',
              to: 'docs'
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://git.scc.kit.edu/complat/chemotion_saurus/edit/development-v2/',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
