FROM node:19.6-bullseye-slim AS base

COPY package*.json ./ 

FROM base AS dev

RUN --mount=type=cache, target=/.npm \
  npm set cache /.npm && \
  npm install 
COPY . .
CMD [ "npm","run","dev" ]

FROM base AS production 

ENV NODE_ENV production

RUN npm install\
  && npm install typescript -g
USER node 
COPY  --chown=node:node . .
RUN tsc
CMD [ "node", "./dist/index.js" ]
