FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 2000
COPY . .
CMD npm start
