# Stage 1
FROM node:20-alpine AS build

WORKDIR /app

COPY ./Frontend/package*.json /app

RUN npm install

COPY ./Frontend /app

RUN npm run build

# Stage 2
FROM node:20-alpine 

WORKDIR /app

COPY ./Backend/package*.json /app

RUN npm install

COPY ./Backend /app

COPY --from=build /app/dist /app/public 

CMD ["node", "server.js"]