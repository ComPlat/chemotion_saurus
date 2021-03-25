# This Dockerfile is intended to build a production-ready app image
FROM phusion/passenger-ruby26:latest

# Add the app's binaries path to $PATH
ENV PATH /usr/local/rvm/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH
ENV APP_HOME /home/app/chemotion_ELN
ENV BUNDLE_PATH /bundle

# Set correct environment variables
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Expose the web port
EXPOSE 3000

# prepare
RUN add-apt-repository ppa:inkscape.dev/stable && \
  apt-get -y update --fix-missing && \
  apt-get -y install ca-certificates apt-transport-https git \
      imagemagick libmagic-dev libmagickcore-dev libmagickwand-dev curl \
      libappindicator1 swig \
      xvfb gconf-service libasound2 libgconf-2-4 cmake \
      libnspr4 libnss3 libpango1.0-0 libxss1 xdg-utils libpq-dev \
      gtk2-engines-pixbuf \
      apt-utils cmake inkscape \
      libeigen3-dev build-essential wget nodejs sudo postgresql-client \
      libmagickcore-dev libmagickwand-dev imagemagick tzdata gnupg2 \
      python-dev libsqlite3-dev libboost-all-dev p7zip-full \
      xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable \
      fonts-crosextra-caladea fonts-crosextra-carlito \
      fonts-dejavu fonts-dejavu-core fonts-dejavu-extra fonts-liberation2 fonts-liberation \
      fonts-linuxlibertine fonts-noto-core fonts-noto-extra fonts-noto-ui-core \
      fonts-opensymbol fonts-sil-gentium fonts-sil-gentium-basic \
      --fix-missing

ENV PANDOC_VERSION 2.10.1
ENV PANDOC_PKG pandoc-${PANDOC_VERSION}-1-amd64.deb
RUN curl -o /tmp/${PANDOC_PKG} -L https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/${PANDOC_PKG}
RUN dpkg -i /tmp/${PANDOC_PKG}

RUN curl -sSL https://get.rvm.io | bash -s stable --ruby=2.6.6 --auto-dotfiles
RUN /bin/bash -c "source /usr/local/rvm/scripts/rvm && rvm use 2.6.6 && rvm install 'ruby-2.6.6' && gem install bundler -v 1.17.3"

# node + npm via nvm; install npm packages
RUN mkdir /usr/local/nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh  | NVM_DIR=/usr/local/nvm bash

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME

RUN /bin/bash -c 'bundle install'
RUN /bin/bash -c 'source /usr/local/nvm/nvm.sh;\
  nvm install 12.18.3;\
  nvm use 12.18.3;'

RUN /bin/bash -c 'source /usr/local/nvm/nvm.sh;\
  npm install;\
  npm install -g npm@6.14.6'

RUN echo '[ -s /usr/local/nvm/nvm.sh ] && . /usr/local/nvm/nvm.sh' >> /home/app/.bashrc
RUN echo '[ -s /usr/local/nvm/nvm.sh ] && . /usr/local/nvm/nvm.sh' >> /home/app/.profile

# WORKDIR $APP_HOME/node_modules/@novnc/noVNC
# RUN /bin/bash -c 'source /usr/local/nvm/nvm.sh;\
#   npx babel-upgrade --write; npm i; npm i pako; npm i @babel/preset-env\
#   mkdir -p utils;\
#   curl https://raw.githubusercontent.com/novnc/noVNC/master/utils/use_require.js > utils/use_require.js;\
#   node utils/use_require.js --clean; true'
# WORKDIR $APP_HOME

# RUN /bin/bash -c 'source /usr/local/nvm/nvm.sh;\
#   npm install @novnc/novnc;\
#   ln -s ../novnc/lib node_modules/\@novnc/noVNC/'

# nginx. https://github.com/phusion/passenger-docker#configuring-nginx
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD chemotion_eln.conf /etc/nginx/sites-enabled/chemotion_eln.conf
ADD secret_key.conf /etc/nginx/main.d/secret_key.conf
ADD gzip_max.conf /etc/nginx/conf.d/gzip_max.conf
ADD postgres-env.conf /etc/nginx/main.d/postgres-env.conf

# configure app
RUN cp -a config/database.yml.example config/database.yml
RUN cp -a config/storage.yml.example config/storage.yml
RUN chmod +x run.sh

# RUN chown -R app:app $APP_HOME
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
