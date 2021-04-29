---
id: dockerinstall
title: Docker Installation
sidebar_label: Docker installation
slug: docker_installation
---

## Preparation
To setup the Chemotion ELN using Docker, Docker and Docker-Compose have to be installed on the host machine. Please refer to your distributions documentation on how this can be achieved. For Ubuntu-based machines, this can be found [here](https://docs.docker.com/engine/install/ubuntu/).

In addition you need that latest version of our Docker-Compose service description. This file can be found here:

  [docker-compose.yml](https://github.com/ComPlat/chemotion_saurus/blob/13496d0d8e4daff2bb3a3aa7a2e77ee69928c803/static/files/docker-compose.yml)

Download this file and place it in a separate folder (further referred to as `CHEMOTION_PATH` as it will contain all the service description but also Chemotion's configuration and data files):

```
cd $CHEMOTION_PATH
curl -L -o docker-compose.yml https://github.com/ComPlat/chemotion_saurus/blob/13496d0d8e4daff2bb3a3aa7a2e77ee69928c803/static/files/docker-compose.yml
```

As a next step, create the necessary folders for configuration, data sharing and the database:

```
cd $CHEMOTION_PATH
mkdir config shared db-data
chown 1000:1000 config shared db-data
```
Note: Make sure that the folders are read and writeable by UID 1000:1000.

## First run
You are now ready to run the initialization. Please note that this will create a new database and delete any old database that might exist. Therefore it is curical that you do only run this command if you want to create a new instance of Chemotion.

```
cd $CHEMOTION_PATH
docker-compose run eln init
```

As the previous command finishes, you are ready to start Chemotion:

```
docker-compose up
```

You will see the system logs in your terminal and after the start-up you can access your fresh instance using a browser. The application is running on `http://localhost:4000`, the seeded administration account is `ADM` (all caps!) with password `PleaseChangeYourPassword`.

## Managing your instance

To get basic information about your instance, run:

```
docker-compose run eln info
```

This will output storage, memory as well as several version information and ensure the fundamentally required runtime is correct.

### Setting up a Reverse-Proxy

To make the installation available to the public, the container's ports should to be forwarded. We suggest to run NGINX as a reverse-proxy either in docker (by extending the Docker-Compose service description file) or stand-alone on the host. The application is (by default) listening on '0.0.0.0:4000'.

```
Todo: NGinx as Revers-Proxy goes here. Mb LE certificates for SSL?
```
