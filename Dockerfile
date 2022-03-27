FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY .env.local ./

COPY db/offlineData ./db/offlineData

COPY db/config ./db/config

COPY db/connection.js ./db/connection.js

COPY apollo ./apollo

COPY components ./components

COPY lib ./lib

COPY pages ./pages

COPY public ./public

COPY utils ./utils

COPY contracts ./contracts

COPY next.config.js ./

COPY server.js ./

COPY Dockerfile ./

RUN NODE_OPTIONS="--max-old-space-size=4096" yarn build

CMD [ "sh", "-c", "NODE_ENV=production MYSQL_HOST=$MYSQL_HOST yarn start" ]



