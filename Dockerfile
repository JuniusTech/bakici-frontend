# Use a Node.js runtime as the base image
FROM node:14

# Create a directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app's source code
COPY . .

# Build the app for production
RUN npm run build

# Expose the app's port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]