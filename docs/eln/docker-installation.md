---
id: dockerinstall
title: Docker Installation
sidebar_label: Docker installation
slug: docker_installation
---

:::info
Documentation and processes are being reworked and improved at the moment. It may happen that you miss information. If you face problems, please let us know, we are there to support you. You may also contact us directly if you plan to install Chemotion. 
https://github.com/ComPlat/chemotion_saurus/blob/master/docs/eln/contact.mdx
:::




## Preparation
To setup the Chemotion ELN using Docker, Docker and Docker-Compose have to be installed on the host machine. Please refer to your distributions documentation on how this can be achieved. For Ubuntu-based machines, this can be found [here](https://docs.docker.com/engine/install/ubuntu/).

In addition you need that latest version of our Docker-Compose service description. This file can be found here:

  [docker-compose.yml](https://github.com/ptrxyz/chemotion/blob/main/client-chemotion/docker-compose.yml)
(For other releases, check out our repository on DockerHub: https://hub.docker.com/r/ptrxyz/chemotion/tags?ordering=last_updated)

Download this file and place it in a separate folder (further referred to as `CHEMOTION_PATH` as it will contain all the service description but also Chemotion's configuration and data files):

```
cd $CHEMOTION_PATH
curl -L -o docker-compose.yml https://raw.githubusercontent.com/ptrxyz/chemotion/main/client-chemotion/docker-compose.yml
```

As a next step, create the necessary folders for configuration, data sharing and the database:

```
cd $CHEMOTION_PATH
mkdir config shared db-data
chown 1000:1000 config shared db-data
```
Note: Make sure that the folders are read and writeable by UID 1000:1000.

## Running Chemotion

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

To start your instance in background mode, use `docker-compose up -d`.
To automagically start your services when the host machine boots, extend the compose file to contain the property `restart`, for example:

```docker-compose.yml
services:
  db:
    ...
  worker:
    restart: unless-stopped
    ...    
  eln:
    restart: unless-stopped
    ...   
```

Please refer to the Docker documentation on how this property works: https://docs.docker.com/config/containers/start-containers-automatically/

## Managing your instance

To get basic information about your instance, run:

```
docker-compose run eln info
```

This will output storage, memory as well as several version information and ensure the fundamentally required runtime is correct.

To get access to the inside of the container, i.e to perform tasks based on the Rails console, one can use the following command:

```
docker-compose run eln bash
```

This will drop you to a root shell inside the container. You are now free to perform any administrative tasks in the container context, but be aware that all changes are ephemeral and lost when the container is stopped. To access the host file system, a mount point has to be used, i.e. such as the already configured `/config` (which maps to `./config` on the host) or `/shared` (which maps to `./shared` on the host).

To change to the Chemotion user context, `sudo` can be used. The Chemotion user context is uid 1000, "chemotion", also stored in the environment variable ${PROD}.
Note: It is important to source the user environment using `source $HOME/.profile` to make sure the right versions of ruby and node are used for any further commands.

The following command will change to the user context and setup user's profile in an easy way:

```
source /etc/init/functions.sh     # source helper functions, i.e. odus
odus bash                         # "opposite of sudo", changes to user context and
                                  # makes sure environment is set up properly
```

As of version 21.06-3 and later, a build-in command is available to simplify this process:

```
docker-compose eln run (user-shell|shell)   # use shell for a root shell, user-shell for a user shell.
```

### Setting up a Reverse-Proxy

To make the installation available to the public, the container's ports should to be forwarded. We suggest to run NGINX as a reverse-proxy either in docker (by extending the Docker-Compose service description file) or stand-alone on the host. The application is (by default) listening on '0.0.0.0:4000'.

```
Todo: NGinx as Revers-Proxy goes here. Mb LE certificates for SSL?
```

## Video
Really short video showing the installation process can be found here: https://asciinema.org/a/lrUMbOEVjEMMZXaJdDUVZrYfV
