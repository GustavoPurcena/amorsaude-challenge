# Stage 1: build
FROM node:20 AS development

WORKDIR /amorsaude/ui/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@13.3.11

COPY . .

RUN npm run build

EXPOSE 4200