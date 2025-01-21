FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Comando para iniciar a aplicação front-end
CMD ["npm", "start"]
