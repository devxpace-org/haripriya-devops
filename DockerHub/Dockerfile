FROM node:20-alpine

COPY package.json /app/haripriya-devops/
COPY src /app/haripriya-devops/

WORKDIR /app/haripriya-devops/

RUN npm install

ENTRYPOINT ["node", "haripriya.js"]






