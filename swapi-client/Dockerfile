FROM node:18

# RUN mkdir -p /usr/src/app

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3030

CMD ["npm", "run", "dev"]