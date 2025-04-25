require("dotenv").config();

module.exports = {
  future: {
    experimental_faster: true,
  },
  title: "Chemotion",
  tagline: "Electronic Laboratory Notebook & Repository for Research Data",
  url: "https://docs.chemotion.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/navbar/favicon.png",
  trailingSlash: false,
  organizationName: "Complat", // Usually your GitHub org/user name.
  projectName: "chemotion_saurus", // Usually your repo name.
  customFields: {
    fund: "Funded By",
  },
  markdown: {
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },
  themeConfig: {
    navbar: {
      title: "Documentation 📖",
      logo: {
        alt: "Chemotion",
        src: "img/navbar/open-c.png",
      },
      items: [
        {
          label: "Who we are",
          to: "https://chemotion.net/about",
          position: "right",
          className: "custom-nav-link",
        },
        {
          label: "Helpdesk",
          to: "https://chemotion.net/helpdesk",
          position: "right",
          className: "custom-nav-link",
        },
        {
          label: "Chemotion.net",
          position: "right",
          to: "https://chemotion.net/",
          className: "custom-nav-link",
        },
      ],
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
              html: '<p style="text-align:center"><a href="https://github.com/ComPlat/chemotion_ELN">Chemotion ELN Source Code ↗</a></p>',
            },
          ],
        },
        {
          items: [
            {
              html: '<p style="text-align:center"><a href="https://chemotion.net/about">About Us</a></p>',
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

  plugins: [
    "@docusaurus/plugin-sitemap",
    "@docusaurus/plugin-content-pages",
    "@docusaurus/plugin-svgr",
    [
      "@docusaurus/plugin-content-docs",
      {
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/ComPlat/chemotion_saurus/edit/main/",
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
        routeBasePath: "/",
      },
    ],
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],
};
