# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências (se houver)
RUN npm install

# Copie os arquivos restantes da aplicação
COPY . .

# Exponha a nova porta que sua aplicação vai rodar
EXPOSE 4000

# Comando para iniciar a aplicação front-end
CMD ["npm", "start"]
