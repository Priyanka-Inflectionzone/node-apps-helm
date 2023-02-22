FROM node:12.17.0-alpine
ADD . /app
WORKDIR /app
COPY package*.json /app/
COPY tsconfig.json ./

RUN npm install
#RUN npm run build
EXPOSE 3002
CMD ["npm","run","start"]