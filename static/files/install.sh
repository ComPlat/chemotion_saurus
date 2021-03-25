#!/bin/bash

set -e 

# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG

# echo an error message before exiting
trap 'echo "\"${last_command}\" command filed with exit code $?."' EXIT

export CES_HOST_PATH=$(pwd)/chemotion_eln_server
export CES_DOCKER_PATH=$(pwd)/chemotion-docker

mkdir -p ${CES_DOCKER_PATH}

git clone https://git.scc.kit.edu/ComPlat/chemotion_eln_server.git
cd chemotion_eln_server
git checkout development

cd $CES_DOCKER_PATH
wget https://ptrxyz.github.io/chemotion-docs/data/Dockerfile
wget https://ptrxyz.github.io/chemotion-docs/data/docker-compose.yml

echo -e "CES_HOST_PATH=${CES_HOST_PATH}\nCES_DOCKER_PATH=${CES_DOCKER_PATH}" > .env

docker-compose build --no-cache

cp ${CES_HOST_PATH}/config/datacollectors.yml.example ${CES_HOST_PATH}/config/datacollectors.yml
cp ${CES_HOST_PATH}/config/storage.yml.example ${CES_HOST_PATH}/config/storage.yml

docker-compose run app bundle exec rake db:create
docker-compose run app bundle exec rake db:migrate
docker-compose run app bundle exec rake db:seed

docker-compose run app /bin/bash -c 'pwd ; /usr/local/nvm/versions/node/v12.18.3/bin/npm i'

docker-compose run app /bin/bash -c 'source /usr/local/nvm/nvm.sh;\
    cd node_modules/@novnc/noVNC;\
    npx babel-upgrade --write; npm i; npm i pako; npm i @babel/preset-env;\
    mkdir -p utils;\
    curl https://raw.githubusercontent.com/novnc/noVNC/master/utils/use_require.js > utils/use_require.js;\
    node utils/use_require.js --clean; true'

docker-compose run app rake ketcherails:import:common_templates
docker-compose run app bundle exec rake assets:precompile