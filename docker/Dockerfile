# Use the LTS base image for Node.js
FROM node:17.8.0-alpine

# Set working directory for future use
WORKDIR /usr/standardized-skills-api/app

# Copy the package.json
COPY package*.json ./

# Install the dependencies from package.json
RUN npm install

# Copy the codebase
COPY . .

# Expose the API on PORT 3000
EXPOSE 3000

# Transpile the codebase
RUN npm run transpile

# Execute to start app
CMD [ "node", "dist/index.js" ]