FROM node:18

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

EXPOSE 3080

CMD ["npm", "run", "dev"]