FROM node:12.6.0-alpine

# Yarn is already installed from the base image

# Install global dependencies
RUN npm install -g pm2

# Copy package.json and yarn.lock, change working directory
RUN mkdir -p /launch-express-react
COPY ./package.json ./yarn.lock /launch-express-react/
WORKDIR /launch-express-react

# Install app dependencies
RUN npm install

# Bundle app source and build assets
COPY . /launch-express-react
RUN npm run build

# Open the server port
EXPOSE 8765

# Launch the server under pm2.
# The process file will run the node start command
CMD ["pm2-runtime", "process.yml"]
