FROM node:4
ENV NPM_CONFIG_LOGLEVEL warn

# Install app dependencies
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Create app directory
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
ADD . /usr/src/app

CMD [ "node", "index.js" ]
