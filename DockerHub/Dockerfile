FROM node:20-alpine

COPY package.json /app/haripriya-devops/
COPY src/maazin.js /app/haripriya-devops/

WORKDIR /app/haripriya-devops/

RUN npm install

ENTRYPOINT ["node", "maazin.js"]






