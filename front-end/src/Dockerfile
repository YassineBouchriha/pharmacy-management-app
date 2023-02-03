FROM node:alpine3.15 
RUN mkdir -p /app

WORKDIR /app
COPY package.json /app/
RUN npm install

COPY  . /app/


FROM nginx:alpine
COPY --from=buid /app/dist/front /user/share/nginx/html

