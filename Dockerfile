FROM ubuntu:latest

RUN apt-get update
RUN apt-get install nginx -y

RUN mkdir /app
WORKDIR /app

COPY index.html /var/www/html
COPY script.js /var/www/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]