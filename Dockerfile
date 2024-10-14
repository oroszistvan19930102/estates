# Dockerfile.json
FROM node:20

# Create a working directory
WORKDIR /app

# Copy the estates.json file into the container
COPY ./frontend/estates.json .

# Install json-server globally
RUN npm install -g json-server

# Expose port 3000
EXPOSE 3000

# Start json-server
CMD ["json-server", "--watch", "estates.json", "--host", "0.0.0.0"]
