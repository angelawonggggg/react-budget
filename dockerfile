FROM node:18

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

EXPOSE 3000
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

COPY . /app

ENTRYPOINT ["/app/docker-entrypoint.sh"]
