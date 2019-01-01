const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send('<h1>Hello from Express!</h1>');
});

// SET UP LIVE SERVER

app.listen(3000);