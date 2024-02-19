FROM node:20 AS development

WORKDIR /amorsaude/src/app

COPY package*.json ./

RUN npm install

# bundle app sources
COPY . .

RUN npm run build

EXPOSE 3000

## PRODUCTION ##
FROM node:20 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set work dir
WORKDIR /amorsaude/src/app

COPY --from=development /amorsaude/src/app .

EXPOSE 3000

# run app
CMD [ "node", "dist/main"]