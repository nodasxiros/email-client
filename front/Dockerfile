FROM node:18-alpine as development

WORKDIR /usr/src/front

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

FROM node:18-alpine As build

WORKDIR /usr/src/front

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/front/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/front/node_modules ./node_modules

CMD [ "npm", "run", "start" ]
