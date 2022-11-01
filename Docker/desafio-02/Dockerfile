FROM node:16.13.1-alpine3.13 as dependencies

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package* ./

RUN npm install

FROM node:16.13.1-alpine3.13 as build

WORKDIR /app

# Copying source files
COPY --from=dependencies /app/node_modules node_modules
COPY . .

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]
