FROM node:18

WORKDIR /usr/scr/app

COPY . .

CMD [ "node", "app.js" ] 
