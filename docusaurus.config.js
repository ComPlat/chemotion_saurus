require("dotenv").config();

const redirects = require("./redirects.json");

module.exports = {
  future: {
    v4: true, // Enable future Docusaurus v4 features
  },
  title: "Chemotion",
  tagline: "Electronic Laboratory Notebook & Repository for Research Data",
  url: "https://chemotion.net",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  favicon: "img/navbar/favicon.png",
  trailingSlash: false,
  organizationName: "Complat", // Usually your GitHub org/user name.
  projectName: "chemotion_saurus", // Usually your repo name.
  customFields: {
    fund: "Funded By",
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
      onBrokenMarkdownImages: "throw",
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
          label: "Who are we",
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
        {
          type: "docsVersionDropdown",
          position: "right",
          versions: {
            current: { label: "Version 3.x" },
            v2: { label: "Version 2.x" },
          },
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      additionalLanguages: ["ruby", "bash", "python", "yaml"],
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
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ComPlat/chemotion_saurus/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          routeBasePath: "/",
          lastVersion: "current",
          versions: {
            current: {
              label: "3.x",
            },
            v2: {
              label: "2.x",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: false,
      },
    ],
  ],
  headTags: [
    {
      tagName: "script",
      attributes: {
        rel: "preconnect",
      },
      innerHTML: `
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init()
            `,
    },
  ],
  scripts: [
    {
      async: true,
      src: "https://track.chemserv.scc.kit.edu/js/pa-LIw7dGM8yVD9O_XZYXiXn.js",
    },
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
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        // 301 redirects from the old underscore URLs to the new dashed ones
        redirects,
      },
    ],
  ],
};
