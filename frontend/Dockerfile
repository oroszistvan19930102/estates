# Stage 1: Build the Angular application
FROM node:20 AS builder

# Set the working directory to /app inside the container
WORKDIR /app

# Copy the rest of your application code
COPY . .

# Install dependencies
RUN npm install

# Build the Angular project for production
RUN npm run build -- --configuration production

# Stage 2: Serve the Angular application using Node.js
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/dist/frontend ./dist/frontend

# Copy package.json for running the application
COPY package*.json ./

# Install production dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD ["node", "dist/frontend/server/server.mjs"]
