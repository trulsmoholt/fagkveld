FROM ubuntu

RUN apt-get update
RUN apt-get install -y nginx

ENV BACKEND_URL="http://localhost:3000"

COPY ./index.html /www/data/index.html

COPY ./start_server.sh .

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["./start_server.sh"]
