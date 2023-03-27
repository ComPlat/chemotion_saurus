# Chemotion Docs

The docs website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. See it live at [https://www.chemotion.net](https://www.chemotion.net/)

## Editing these Docs

As long as your edits are relatively simple i.e. modifying a spelling error, introducing a line or adding a comment, you can use the `Edit this page` button at the bottom of most pages.

## Complex edits and development of Backend

### Setup using `.devcontainer`

The best way of creating a development environment for these Docs is to use a [development container](https://containers.dev/). A [`.devcontainer`](.devcontainer.json) file is contained in the repository itself.

As long as you have a supported IDE (e.g. [VSCode](https://code.visualstudio.com/)), you can run the following to have a development environment in ~5 minutes.

```shell
git clone https://github.com/ComPlat/chemotion_saurus
cd chemotion_saurus
code .
```

This should launch the IDE and you will get an option to reopen the folder as a container. Use it and you are good to go.

### Setting up and starting locally

This presumes that you have [node](https://nodejs.org/) installed.

```console
# install all required packages
npm install
# start local development server
npm start
```

The second command opens a browser window. Most changes are reflected live without having to restart the server. Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to stop.

### Building

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```console
# build static content
npm run build
# serve static content
npm run serve
```

## Deployment

![code status](https://github.com/ComPlat/chemotion_saurus/actions/workflows/build.yml/badge.svg)

The website is deployed with GitHub Actions [here](https://github.com/ComPlat/chemotion_saurus/blob/aa6fe5cc1ade8517f855a7df1ef4f6d648c67f26/.github/workflows/build.yml#L40).
