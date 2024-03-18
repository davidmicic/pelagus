FROM node:latest

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY vite.config.ts vite.config.ts

RUN npm install

CMD ["npm", "run", "preview"]