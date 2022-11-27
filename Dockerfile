FROM node:16.18-alpine3.15 as deps

WORKDIR /app

COPY package.json ./

RUN yarn install --frozen-lockfile

FROM node:16.18-alpine3.15 as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build

FROM node:16.18-alpine3.15 as runner

WORKDIR /usr/src/app


COPY package.json ./

RUN yarn install

COPY --from=builder /app/dist ./dist

ENV POSTGRES_DB 'postgres'
ENV POSTGRES_USER 'postgres'
ENV POSTGRES_PASSWORD 'postgres'
ENV PORT 5002
ENV DB_HOST 'db'
ENV DB_PORT 5432

CMD [ "node", "dist/index.js" ]