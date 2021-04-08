FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY .env.local ./

COPY db ./db

COPY knexfile.js ./

RUN yarn knex:migrate

RUN yarn knex:seed

COPY apollo ./apollo

COPY components ./components

COPY lib ./lib

COPY pages ./pages

COPY public ./public

COPY utils ./utils

COPY next.config.js ./

COPY Dockerfile ./

CMD yarn dev


