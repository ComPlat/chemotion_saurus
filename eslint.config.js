const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const mdx = require("eslint-plugin-mdx");

module.exports = [
  {
    ignores: ["build/**", ".docusaurus/**", "node_modules/**"],
  },
  // Root-level config/scripts: plain Node, CommonJS (require/module.exports).
  {
    files: [
      "*.js",
      "scripts/**/*.js",
    ],
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        module: "writable",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
        console: "readonly",
      },
    },
    rules: js.configs.recommended.rules,
  },
  // React components and client/theme code: ES modules, JSX, browser globals.
  {
    files: ["src/**/*.js"],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { document: "readonly", window: "readonly" },
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],
      "react/prop-types": "off",
    },
  },
  // Markdown/MDX docs content: frontmatter + embedded JSX.
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: false }),
    rules: {
      ...mdx.flat.rules,
      // Standalone `{" "}` spacing expressions are a normal MDX/JSX
      // authoring pattern (forcing whitespace between inline elements),
      // not a real unused-expression bug -- this rule can't tell them
      // apart, so it's pure noise here.
      "no-unused-expressions": "off",
    },
  },
];
