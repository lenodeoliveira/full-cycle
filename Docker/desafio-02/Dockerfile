FROM node:16 as dependencies

# Create app directory
WORKDIR /app

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

#RUN chmod +x /start.sh

COPY . .

RUN npm install

EXPOSE 3000

# CMD [ "npm", "start" ]

