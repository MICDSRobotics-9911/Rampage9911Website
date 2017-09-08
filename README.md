# Technomaric5190Website
This is the official website project for Technoramic

# Prerequisites
- You must have [the latest version of node.js](https://nodejs.org/en/)

# Setting up and Running the Server
First we must setup the server in order for it to run. First, open up a command window and navigate it to the repository. Then run

```
npm install -D
```

then run to start it

```
node index.js
```
Now open your web browser and go to `http://localhost:1200`


The server should start with the message of `Server started`. If it doesn't try these things
- delete the node_modules folder
- then do `npm install -D`
- check you node.js installation

# Using Nodemon
To auto-run the server on saving, you may want to use nodemon. To set up, run

```
npm install -g nodemon
```

to run the server, run

```
nodemon index.js
```

# Information
The backend server is written in node.js (the index.js). The files in the views folder contains the `.ejs` files that are the actual pages
