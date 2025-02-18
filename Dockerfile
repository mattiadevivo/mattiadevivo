FROM node:22-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
COPY . .

RUN corepack enable

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:1.27.4-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=base /app/dist .

COPY <<'EOF' /etc/nginx/templates/default.conf.template
server {
    listen 80;
    
    log_format main '[$time_local] "$request" URI - $uri';

    root /usr/share/nginx/html;
    index index.html

    location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to redirecting to index.html
        try_files $uri $uri/ /index.html;
    }
}
EOF

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]