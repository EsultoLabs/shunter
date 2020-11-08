FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --only=production install

COPY . .

ARG PORT
EXPOSE $PORT

CMD [ "npm", "run", "start" ]