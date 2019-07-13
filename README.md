# launch-express-react

Launchpad for a simple production-grade full stack web app

## Features

* React 16
* Webpack 4
* Babel 7
* Hot Reloading
* Code Linting
* Express API server
* Docker Packaging
* PM2 Process Management
* AWS EB Deployment

## Installation

* `git clone https://github.com/SierraSpaceAgency/launch-express-react.git`
* `cd launch-express-react`
* `npm install`
* `npm start` 
* (Alternatively, for better server/client logging) `npm run dev-server` in one tab and `npm run dev-client` in another
* http://localhost:4321 will open when the client app loads

## Development
#### Linting
* Lint everything `npm run lint .`
* Lint autofix `npm run lint . -- --fix`
* Lint a particular thing `npm run lint ./client`