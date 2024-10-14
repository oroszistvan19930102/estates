# Dockerfile for Angular
FROM node:20 AS builder

WORKDIR /app

COPY ./package*.json ./

COPY ./src ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

RUN npm install

RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
