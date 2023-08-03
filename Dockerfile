FROM node:18-alpine AS build

ARG contentful_access_token
ARG contentful_space_id

WORKDIR /app
COPY . .

RUN npm update
RUN npm ci

ENV GATSBY_CONTENTFUL_ACCESS_TOKEN ${contentful_access_token}
ENV GATSBY_CONTENTFUL_SPACE_ID ${contentful_space_id}

RUN npm run build

FROM nginx:1.18-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]