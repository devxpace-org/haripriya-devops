FROM node:20-alpine

COPY package.json /app/haripriya-devops/
COPY src/chethna.js /app/haripriya-devops/

WORKDIR /app/haripriya-devops/

RUN npm install

ENTRYPOINT ["node", "chethna.js"]






