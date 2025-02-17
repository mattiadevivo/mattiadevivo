FROM node:22-alpine AS build

WORKDIR /app
COPY . .

RUN pnpm install
RUN pnpm build

FROM nginx:1.27.4-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]