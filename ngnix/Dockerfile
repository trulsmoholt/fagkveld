FROM ubuntu

RUN apt-get update
RUN apt-get install -y nginx

COPY ./index.html /www/data/index.html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx"]
