# Dockerfile for Angular
FROM node:16 AS builder
WORKDIR /
COPY ./package*.json ./
RUN npm install
# Copy the rest of the application files
COPY ./src/app ./
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /src/app/dist/frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
