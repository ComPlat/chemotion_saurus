require("dotenv").config();

module.exports = {
  title: "Chemotion",
  tagline: "Electronic Laboratory Notebook & Repository for Research Data",
  url: "https://chemotion.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logos/favicon.ico",
  organizationName: "Complat", // Usually your GitHub org/user name.
  projectName: "chemotion_saurus", // Usually your repo name.
  customFields: {
    fund: "Funded By",
  },
  themeConfig: {
    announcementBar: {
      id: "restructuring",
      content:
        "The Documentation has been significantly restructured. If your referring link is broken, it would be best to use the Search feature.",
      backgroundColor: "#03e8fc",
      textColor: "#000000",
      isCloseable: true,
    },
    navbar: {
      title: "Chemotion",
      logo: {
        alt: "Chemotion",
        src: "img/logos/favicon.ico",
      },
      items: [
        {
          label: "Documentation 📖",
          position: "left",
          docId: "welcome",
          type: "doc",
        },
        {
          label: "Helpdesk 🤝",
          position: "right",
          to: "/helpdesk",
        },
        {
          label: "Chemotion Repository ↗️",
          position: "right",
          to: "https://www.chemotion-repository.net/",
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
              // using html to ensure centered alignment
              html: `<p style="text-align:center"><a href="https://github.com/ComPlat/chemotion_ELN">Chemotion ELN Source Code ↗</a></p>`,
            },
          ],
        },
        {
          items: [
            {
              html: `<p style="text-align:center"><a href="/about">About Us</a></p>`,
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
          editUrl: "https://github.com/ComPlat/chemotion_saurus/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          routeBasePath: "/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
