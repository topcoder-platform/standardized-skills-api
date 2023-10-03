# Use the LTS base image for Node.js
FROM node:17.8.0-alpine

# Set working directory for future use
WORKDIR /usr/standardized-skills-api/app

# Copy the codebase
COPY . .

# Install the dependencies from package.json
RUN npm install

# Run the lint to check for lint errors and stop further progress
RUN npm run lint

# Expose the API on PORT 3000
EXPOSE 3000

# Transpile the codebase
RUN npm run transpile

# Execute to start app
CMD [ "node", "dist/index.js" ]