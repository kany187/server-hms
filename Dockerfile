FROM node:lts-alpine

WORKDIR /usr/src/hms-api

COPY ./ ./

RUN npm install 

CMD ["npm", "start"]
