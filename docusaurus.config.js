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
  clientModules: [require.resolve("./src/clientModules/manageVersionDropdowns.js")],
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
          docsPluginId: "default",
          className: "docs-version-dropdown docs-version-dropdown--eln",
          versions: {
            current: { label: "ELN v4.x" },
            v3: { label: "ELN v3.x" },
            v2: { label: "ELN v2.x" },
          },
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          docsPluginId: "labimotion",
          className: "docs-version-dropdown docs-version-dropdown--labimotion",
          versions: {
            current: { label: "LabIMotion v2.2" },
            "2.1": { label: "LabIMotion v2.1" },
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
          sidebarItemsGenerator: require("./sidebarItemsGenerator.js"),
          editUrl: "https://github.com/ComPlat/chemotion_saurus/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          routeBasePath: "/",
          // Cutting a new major version snapshots today's docs/ tree as the
          // version that is *ending*, before work on the next one begins:
          //   npm run docusaurus -- docs:version <version-that-is-ending, e.g. v3>
          // That freezes docs/ into versioned_docs/version-<id> and adds <id>
          // to versions.json. Then update the `versions` map below (and the
          // matching navbar dropdown entry) to add the frozen version's label
          // and relabel "current" for the version now being developed.
          //
          // `lastVersion` is the version served at the root (/docs/...) and
          // offered as the default; every other version gets a path prefix.
          // Keep it pointing at the latest *shipped* release:
          //   - while the next version is unreleased, that is the newest
          //     frozen snapshot (today: "v3"), and the in-progress docs/ tree
          //     is served under /docs/next/ as ELN v4.x.
          //   - once v4 ships, move lastVersion to "current".
          // This is the same arrangement LabIMotion uses below. Note that
          // moving lastVersion changes which tree is served without a prefix,
          // which in turn changes what the relative links in each tree's root
          // index.mdx resolve to -- see the note in AGENTS.md; the build does
          // not catch that class of error.
          lastVersion: "v3",
          versions: {
            current: {
              label: "ELN v4.x",
            },
            v3: {
              label: "ELN v3.x",
            },
            v2: {
              label: "ELN v2.x",
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
        // Explicit rather than relying on the default (["docs"]) happening
        // to match: the default instance's routeBasePath is "/" (so its
        // pages fall under docsRouteBasePath "") and the "repo" and
        // "labimotion" instances' are "repo" and "labimotion". If the
        // default instance's routeBasePath ever changes, this stops
        // Repository/LabIMotion silently dropping out of search.
        docsRouteBasePath: ["/", "repo", "labimotion"],
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "repo",
        path: "repo-docs",
        routeBasePath: "repo",
        sidebarPath: require.resolve("./sidebars-repo.js"),
        sidebarItemsGenerator: require("./sidebarItemsGeneratorRepo.js"),
        editUrl: "https://github.com/ComPlat/chemotion_saurus/edit/main/",
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
        // Chemotion Repository is a separate product from the ELN with its
        // own release cycle -- intentionally unversioned (no `versions`).
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "labimotion",
        path: "labimotion-docs",
        routeBasePath: "labimotion",
        sidebarPath: require.resolve("./sidebars-labimotion.js"),
        sidebarItemsGenerator: require("./sidebarItemsGeneratorLabimotion.js"),
        editUrl: "https://github.com/ComPlat/chemotion_saurus/edit/main/",
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
        // Chemotion LabIMotion is a separate product from the ELN with its
        // own release cycle -- versioned independently of the ELN's v2/v3,
        // using a major.minor scheme. "2.1" is the latest released version
        // and is served by default; "current" (the labimotion-docs/ source
        // tree) is the in-progress, unreleased "2.2".
        //
        // Unlike ELN above, "current" here is always the *next*, unreleased
        // minor -- so when 2.2 ships, snapshot it directly under its own
        // name (not "current"):
        //   npm run docusaurus -- docs:version:labimotion 2.2
        // That freezes today's labimotion-docs/ tree into
        // labimotion_versioned_docs/version-2.2 and adds "2.2" to
        // labimotion_versions.json, leaving labimotion-docs/ itself as the
        // new in-progress "current" (2.3). Then update `lastVersion` to
        // "2.2" and the `versions` map below (and the matching navbar
        // dropdown entry above) to add 2.2's label and relabel "current" as
        // "2.3".
        lastVersion: "2.1",
        versions: {
          current: {
            label: "2.2",
          },
          "2.1": {
            label: "2.1",
          },
        },
      },
    ],
  ],
};
