---
id: dockerinstall
title: Docker Installation
sidebar_label: Docker installation
slug: docker_installation
---

:::info
Documentation and processes are being reworked and improved at the moment. It may happen that you miss information. If you face problems, please let us know, we are there to support you. You may also [contact](specific_contact) us directly if you plan to install Chemotion. 
:::

## Version 1.0.3D0.1

With release `1.0.3D0.1`, beside upgrading the ELN version to 1.0.3, we made great improvements to the Docker middleware framework. We introduce the concept of _configuration landscapes_ as bundles of configuration files that describe a certain environment. This is a first step to enabling users to easily switch between production, testing or teaching environments with a single command.

As of now, there is only one landscape shipped with the image and we plan to add more over time depending on user needs. You can always create your own landscapes and quickly move between them. Check out the `docker-compose run eln landscape` command for more info.

Further, this changed the config file structure a bit. While in previous versions, the ELN configuration was stored in `./shared/config` and the container configuration was stored in `./config`, there is only one folder now: `./shared`. We hope this change makes it more intuitive for users.

On the inside, we managed to reduce the size of our images by more than 50% by being more selective when it comes to installed packages: using multistage builds to build the big dependencies makes sure that no build artifacts are unnecessarily present in the final image. To ensure consistency we added a dependency scanner that makes sure that all dependencies are still satisfied and no libraries are missing.


## Preparation
To setup the Chemotion ELN using Docker, Docker and Docker-Compose have to be installed on the host machine. Please refer to your distributions documentation on how this can be achieved. For Ubuntu-based machines, this can be found [here](https://docs.docker.com/engine/install/ubuntu/).

In addition you need that latest version of our Docker-Compose service description as well as some scripts depending on your scenario. The file can be found here:

| File | Description | 
| ---- | ----------- |
| [docker-compose.yml](https://github.com/ptrxyz/chemotion/blob/main/client-chemotion/docker-compose.yml) | service description file |
| [setup.sh](https://raw.githubusercontent.com/ptrxyz/chemotion/v1.0.3D0.1/client-chemotion/setup.sh)   | use this script if you plan to setup a new Chemotion ELN instance |
| [upgrade.sh](https://raw.githubusercontent.com/ptrxyz/chemotion/v1.0.3D0.1/client-chemotion/upgrade.sh) | this script shall be used to perform an upgrade of an existing instance from v0.9.1 to v1.0.3 |
| [backup.sh](https://raw.githubusercontent.com/ptrxyz/chemotion/v1.0.3D0.1/client-chemotion/backup.sh)  | script to backup your data before messing things up |


(For other releases, check out our repository on DockerHub[^1] and the archived installation on Github[^2])
[^1]: Chemotion-Images hosted on [DockerHub](https://hub.docker.com/r/ptrxyz/chemotion/tags?ordering=last_updated)
[^2]: Archived Documentation on [Github](https://github.com/ComPlat/chemotion_saurus/blob/026531e75ced4f31ec2da3884e2a9a450e949192/docs/eln/docker-installation.md)

Download this file and place it in a separate folder (further referred to as `CHEMOTION_PATH` as it will contain all the service description but also Chemotion's configuration and data files):

```
mkdir -p $CHEMOTION_PATH
cd $CHEMOTION_PATH
curl -L -O https://raw.githubusercontent.com/ptrxyz/chemotion/v1.0.3D0.1/client-chemotion/docker-compose.yml
curl -L -O https://raw.githubusercontent.com/ptrxyz/chemotion/v1.0.3D0.1/client-chemotion/backup.sh
curl -L -O https://raw.githubusercontent.com/ptrxyz/chemotion/v1.0.3D0.1/client-chemotion/setup.sh
curl -L -O https://raw.githubusercontent.com/ptrxyz/chemotion/v1.0.3D0.1/client-chemotion/upgrade.sh
```

As a next step, run the setup script and follow the instructions:

```
cd $CHEMOTION_PATH
bash ./setup.sh
```

## Running Chemotion

You are now ready to run the initialization. Please note that this will create a new database and delete any old database that might exist. Therefore it is curical that you do only run this command if you want to create a new instance of Chemotion.

```
cd $CHEMOTION_PATH
docker-compose run landscape deploy
docker-compose run eln init
```

As the previous command finishes, you are ready to start Chemotion:

```
docker-compose up
```

You will see the system logs in your terminal and after the start-up you can access your fresh instance using a browser. The application is running on `http://localhost:4000`, the seeded administration account is `ADM` (all caps!) with password `PleaseChangeYourPassword`.

To start your instance in background mode, use `docker-compose up -d`.
The services will automatically restart when the docker daemon restarts. This can be configured by removing the lines containing `restart: unless-stopped` in the `docker-compose.yml` file or disabling autostart of your docker daemon on your system:

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

### Basic Information

To get basic information about your instance, run:

```
docker-compose run eln info
```

This will output storage, memory as well as several version information and ensure the fundamentally required runtime is correct.

### Getting a shell inside the container

To get access to the inside of the container, i.e to perform tasks based on the Rails console, one can use the following command:

```
docker-compose run eln shell
```

This will drop you to a root shell inside the container. You are now free to perform any administrative tasks in the container context, but be aware that all changes are ephemeral and lost when the container is stopped. To access the host file system, a mount point has to be used, i.e. such as the already configured `/shared` (which - by default - maps to `./shared` on the host).

## Backing up your data

To backup your data, it is sufficient to run the following command on your host machine (not inside the container) in the folder, where your Compose file resides:

```
sudo bash ./backup.sh
```

 :::info
 It is adviced to setup an automatic system task (i.e. cron job) to backup regularly. This is highly system specific and thus out of the scope of this documentation. Please refer to your OS's manual to find out how to setup scheduled tasks. 
 In addition, you should always backup before upgrading your installation.
:::

## Upgrading

 > Note: Before upgrading anything, we highly advice to create a backup (see above)! No backup? no pity!
 > Note: This upgrade is tailored and tested for the upgrade from 0.9.1 to 1.0.3.
 > Note: downgrading is not supported.

Stop the services: `docker-compose stop --remove-orphans`

To upgrade your instance place the new `docker-compose.yml` and `upgrade.sh` in the directory where the Chemotion service files reside and run

```
sudo bash ./upgrade.sh
```

This will make sure files are properly configured and the database schemes are adjusted if necessary.

 > Note: Without this step, the containers will refuse to start to prevent any possible damage to your installation.

Now, restart the services: `docker-compose restart`

### Setting up a Reverse-Proxy

To make the installation available to the public, the container's ports should to be forwarded. We suggest to run NGINX as a reverse-proxy either in docker (by extending the Docker-Compose service description file) or stand-alone on the host. The application is (by default) listening on '0.0.0.0:4000'.

A demo service description as well as some sample configuration files for NGINX can be found in the Docker-Chemotion-Monorepo (https://github.com/ptrxyz/chemotion) in the sub-folder `reverse-proxy`.

