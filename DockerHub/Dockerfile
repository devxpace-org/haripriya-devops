FROM node:20-alpine

COPY package.json
COPY team.js

WORKDIR /app/haripriya-devops/

RUN npm install

ENTRYPOINT ["node", "team.js"]



