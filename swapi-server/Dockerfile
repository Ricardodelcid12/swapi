FROM node:18

RUN npm install -g ts-node

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm","start"]