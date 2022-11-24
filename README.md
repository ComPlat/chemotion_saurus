# Website
This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.  
See it live [https://www.chemotion.net/chemotionsaurus/](https://www.chemotion.net/chemotionsaurus/)

## Installation
Instead of ```npm``` you can also use ```yarn```.

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server. Press ```Ctrl + C``` to stop.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Clear Cache
```console
npm run clear
```

## Deploy
The website is deployed with GitHub Actions: https://github.com/ComPlat/chemotion_saurus/blob/aa6fe5cc1ade8517f855a7df1ef4f6d648c67f26/.github/workflows/build.yml#L40

## Code Status
![](https://github.com/ComPlat/chemotion_saurus/actions/workflows/build.yml/badge.svg)
