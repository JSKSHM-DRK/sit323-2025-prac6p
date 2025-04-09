# Use an official Node.js runtime as a parent image
FROM node:20.12.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app listens on
EXPOSE 8080

# Command to run your application
CMD ["node", "app.js"]

