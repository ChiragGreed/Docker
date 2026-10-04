FROM node:20-alpine AS build

WORKDIR /app

COPY ./Frontend/package*.json /app

RUN npm install

COPY ./Frontend /app

RUN npm run build

FROM node:20-alpine 

WORKDIR /app

COPY ./Backend /app