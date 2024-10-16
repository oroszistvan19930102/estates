# Dockerfile for PHP
FROM php:8.0-cli

# Install any necessary PHP extensions, e.g., PDO
RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html
COPY ./ ./

EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000", "-t", "."]
