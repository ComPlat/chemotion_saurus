require("dotenv").config();

module.exports = {
  title: "Chemotion",
  tagline:
    "Electronic Laboratory Notebook (ELN) &\n" +
    "Repository for Research Data\n",
  url: "https://chemotion.net",
  baseUrl: "/chemotionsaurus/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Complat", // Usually your GitHub org/user name.
  projectName: "chemotion_saurus", // Usually your repo name.
  customFields: {
    fund: "Funded By",
  },
  themeConfig: {
    navbar: {
      title: "Chemotion",
      logo: {
        alt: "Chemotion",
        src: "img/favicon.ico",
      },
      items: [
        {
          label: "Documentation",
          position: "left",
          items: [
            {
              label: "ELN",
              to: "docs/eln/intro",
            },
            {
              label: "Repository",
              to: "docs/repo/videos_repo",
            },
            {
              label: "About this documentation",
              to: "docs/docu/maintaining",
            },
          ],
        },
        {
          to: "blog/newsroom",
          label: "Newsroom",
          position: "left",
        },
      ],
    },

    algolia: {
      // for development, put .env file containing ALGOLIA_SEARCH_API_KEY and INDEX_NAME in root of repo
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      indexName: process.env.INDEX_NAME,
      appId: process.env.ALGOLIA_APP_ID,
      debug: true,
      placeholder: "Search Documentation",
      facetFilters: [],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      additionalLanguages: ["ruby"],
    },
    footer: {
      style: "light",
      links: [
        {
          items: [
            {
              label: "ELN GitHub",
              to: "https://github.com/ComPlat/chemotion_ELN",
            },
          ],
        },

        {
          items: [
            {
              label: "Repository GitHub",
              to: "https://github.com/ComPlat/chemotion_REPO",
            },
          ],
        },

        {
          items: [
            {
              label: "Contact Us",
              to: "about",
            },
          ],
        },

        {
          items: [
            {
              label: "Admin",
              to: "admin",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chemotion - KIT. Built with Docusaurus.`,
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ComPlat/chemotion_saurus/edit/master/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
