FROM node:alpine

WORKDIR /usr/scr/app

COPY . .

CMD [ "node", "app.js" ] 
