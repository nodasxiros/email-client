FROM node:18-alpine As development

WORKDIR /usr/src/api

COPY --chown=node:node package*.json ./

RUN npm i -g @nestjs/cli

RUN npm ci --legacy-peer-deps

COPY --chown=node:node . .

USER node

FROM node:18-alpine As build

WORKDIR /usr/src/api

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/api/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/api/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/api/dist ./dist

CMD [ "node", "dist/main.js" ]
