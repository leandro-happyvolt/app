FROM node:18

WORKDIR /app

COPY ./tsconfig.json ./
COPY package*.json ./
COPY ./prisma ./prisma/

# COPY ./nodemon.json ./
# COPY ./index.d.ts ./

RUN npm install

ARG ENV_MODE="development"
COPY .env.$ENV_MODE ./

COPY ./src ./src

EXPOSE 4000

CMD ["npm", "run", "start:development"]