# Technomaric5190Website [![Build Status](https://travis-ci.org/MICDSRobotics/Technomaric5190Website.svg?branch=master)](https://travis-ci.org/MICDSRobotics/Technomaric5190Website)
This is the official website project for Technoramic

## Prerequisites
- [node.js](https://nodejs.org/en/)

## Setting up and Running the Server
First we must setup the server in order for it to run. First, open up a command window and navigate it to the repository. Run `npm install -D` then run `node index.js` to start it. The server shoud now be serving on `http://localhost:1200`.


The server should start with the message of `Server started`. If it doesn't, try these things:
- Delete the `node_modules` folder
- `npm install -D`
- Check your node.js installation

### Using Nodemon
To auto-run the server on saving, you may want to use nodemon. Run `npm install -g nodemon` to install it and run `nodemon index.js` or `npm run live` to start live-reloading.

## Information
The backend server is written in node.js (`index.js`). The `.ejs` files in the `/views/pages` folder contain the actual pages that are served.
