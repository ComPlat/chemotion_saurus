# Chemotion Docs

The docs website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. See it live at [https://www.chemotion.net](https://www.chemotion.net/)

## Editing these Docs

As long as your edits are relatively simple i.e. modifying a spelling error, introducing a line or adding a comment, you can use the `Edit this page` button at the bottom of most pages.

## Complex edits and development of Backend

### Setup using `.devcontainer`

The best way of creating a development environment for these Docs is to use a [development container](https://containers.dev/). A `.devcontainer` file is contained in the repository itself.

As long as you have a supported IDE (e.g. [VSCode](https://code.visualstudio.com/)), you can run the following to have a development environment in ~5 minutes.

```shell
git clone https://github.com/ComPlat/chemotion_saurus eln_docs
cd eln_docs
code .
```

This should launch the IDE and you will get an option to reopen the folder as a container. Use it and you are good to go.

### Setup locally

This presumes that you have [node](https://nodejs.org/) installed.

```console
npm install
```

### Starting locally

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server. Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to stop.

```console
npm start
```

You may want to disable [algolia search](https://docusaurus.io/docs/search#using-algolia-docsearch) during development (in case you don't have the API key). To do this, comment out the `module.exports.themeConfig.algolia` key in the file [docusaurus.config.js](docusaurus.config.js).

### Building

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```console
npm run build
```

## Deployment

![code status](https://github.com/ComPlat/chemotion_saurus/actions/workflows/build.yml/badge.svg)

The website is deployed with GitHub Actions [here](https://github.com/ComPlat/chemotion_saurus/blob/aa6fe5cc1ade8517f855a7df1ef4f6d648c67f26/.github/workflows/build.yml#L40).
