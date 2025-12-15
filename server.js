// begin by setting up the main server entry point file.

// start by importing the express module.
// in Node.js we use the 'require' to import modules. the express module returns a function that when called, creates an instance of an Express application.

const express = require("express");
const path = require("path");

const app = express(); //express creates an instance of an express application.the app object has batch of methods for routing http requests, configuring middleware and listening for connections.

app.get("/", (req, res) => {
  res.send("<h1>Hello world, iam currently learning express</h1>");
});

// setting up a simple route to my Public folder!
// first begin by importing the path module for file paths

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// but in case there are multiple files in the public folder, they should be served as static!

// set up static folder, using the express static middleware

app.use(express.static(path.join(__dirname, "public")));

// setting up a static folder

const PORT = 8080;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`)); //this starts the server and listening on the port 8080.
