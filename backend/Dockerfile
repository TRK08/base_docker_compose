FROM node:20-alpine
WORKDIR /api
COPY package*.json ./
RUN npm i 
COPY . .
EXPOSE 8085
CMD ["node", "app.js"]
