FROM node:latest

# Set the working directory to /app
WORKDIR /web

# Copy the current directory contents into the container at /app
COPY . /web

# Install any needed packages specified in requirements.txt
RUN npm install express --save
RUN npm install pg --save

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.js when the container launches
CMD ["node", "app.js"]
