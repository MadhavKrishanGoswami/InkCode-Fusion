FROM node:19.4-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

COPY . .
RUN npm run build
# Expose the port
EXPOSE 3000
# Run the app
CMD ["npm", "start"]
