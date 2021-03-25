---
id: dockerinstall
title: Chemotion ELN - installation using Docker
sidebar_label: Docker installation
slug: docker_installation
---

To setup the Chemotion ELN using Docker, Docker and Docker-compose have to be installed on the host machine. Please refer to your distributions documentation on how this can be achieved. For Ubuntu-based machines, this can be found [here](https://docs.docker.com/engine/install/ubuntu/).

In addition you need that latest version of our Docker build files. They can be found here:

-   [Dockerfile](https://ptrxyz.github.io/chemotion-docs/data/Dockerfile)
-   [docker-compose.yml](https://ptrxyz.github.io/chemotion-docs/data/docker-compose.yml)

Download those files and place them in a separate folder (further referred to as `CES_DOCKER_PATH` as it should contain all the files to build and run the container).

In a next step checkout the Chemotion ELN main repository and change to the latest branch:

```
git clone https://git.scc.kit.edu/ComPlat/chemotion_eln_server.git
cd chemotion_eln_server
git checkout development
```

In this documentation we refer to the folder containing the source files as `CES_HOST_PATH`. These paths are used by the Docker files and thus they need to exported to the shell as environment variables:

```
export CES_HOST_PATH=/{change this}/chemotion_eln_server
export CES_DOCKER_PATH=/{change this}/chemotion-docker
```

Now, we can start the build process for the container:

```
cd $CES_DOCKER_PATH
echo "CES_HOST_PATH=${CES_HOST_PATH}\nCES_DOCKER_PATH=${CES_DOCKER_PATH}" > .env

docker-compose build --no-cache
```

After the container has been built, the ELN service has to be configured using it's configuration files. The configuration files are all present in `CES_HOST_PATH` with a `.example` extension. Please make sure to edit them according to your needs and save them without the `.example` extension. Most configuration files should be self-explanatory but further explanation can be found on the [Chemotion ELN repository](https://github.com/ComPlat/chemotion_ELN/-/blob/development/INSTALL.md).

If you just want to use the example configuration, you can copy the example files:

```
cp ${CES_HOST_PATH}/config/datacollectors.yml.example ${CES_HOST_PATH}/config/datacollectors.yml
cp ${CES_HOST_PATH}/config/storage.yml.example ${CES_HOST_PATH}/config/storage.yml
```

With the application being configured, `docker-compose` can be used to initialize the database:

```
docker-compose run app bundle exec rake db:create
docker-compose run app bundle exec rake db:migrate
docker-compose run app bundle exec rake db:seed
```

Here, the last line is optional but highly recommended, since it does create a demo user `template.moderator@eln.edu` with the password `@eln.edu`.

The next step is to install dependencies that are needed by the application and are not present in the container:

```
docker-compose run app /bin/bash -c '/usr/local/nvm/versions/node/v12.18.3/bin/npm i'

docker-compose run app /bin/bash -c 'source /usr/local/nvm/nvm.sh;\
 cd node_modules/@novnc/noVNC;\
 npx babel-upgrade --write; npm i; npm i pako; npm i @babel/preset-env;\
 mkdir -p utils;\
 curl https://raw.githubusercontent.com/novnc/noVNC/master/utils/use_require.js > utils/use_require.js;\
 node utils/use_require.js --clean; true'
```

After this, the next commands precreate static assets. This is also a good test to make sure everything went as expected:

```
docker-compose run app rake ketcherails:import:common_templates
docker-compose run app bundle exec rake assets:precompile
```

With the last command exiting with error code 0, the service should be setup correctly and is ready to be used. This can be done by starting the services with `docker-compose`:

```
cd ${CES_DOCKER_PATH}
docker-compose up -d
```

The services are now up and running and will be available on [localhost:3000](http://localhost:3000).
To simplify this installation process, the steps are all gathered in a single shell script that can be found [here](https://ptrxyz.github.io/chemotion-docs/data/install.sh). Feel free to use this, yet this does not consider any user specific configuration and is thus not meant to be used in a production environment. Further, the script does not check if any files in the target folders `$(pwd)/chemotion_eln_server` and `$(pwd)/chemotion-docker` exist. Files might be overwritten, so handle with care!

### Setting up a Reverse-Proxy

To make the installation available to the public, the container's ports have to be forwarded.

```
Todo: NGinx as Revers-Proxy goes here. Mb LE certificates for SSL?
```
