FROM node:20-alpine

COPY package.json
COPY haripriya.js

WORKDIR /app/haripriya-devops/

RUN npm install

ENTRYPOINT ["node", "haripriya.js"]



