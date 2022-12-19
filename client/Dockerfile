FROM node:18

WORKDIR /app

COPY ./public ./
COPY ./index.html ./
COPY tsconfig*json ./
COPY vite.config.ts ./
COPY package*json ./

RUN npm install

ARG ENV_MODE="development"
COPY .env.$ENV_MODE ./

COPY ./src ./src

EXPOSE 3500

# By for default
CMD ["npm", "run", "start:development"]


