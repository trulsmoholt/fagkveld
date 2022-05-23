FROM node

WORKDIR /app

COPY ./node_modules /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD ["node","index.js"]