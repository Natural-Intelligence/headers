FROM node:7

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install express
USER nobody
CMD [ "node" , "app.js" ]

