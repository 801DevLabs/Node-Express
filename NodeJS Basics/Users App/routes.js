const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Hello! Welcome to the app</h1><form action="/create-user" method="POST"><input type="text" name="message"><button>Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body><h1>Users</h1><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  
  if(url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      return res.end();
    });
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</body>');
  res.write('</html>');
  res.end();

};

module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.sometext = 'Some hard coded text';

// exports.handler = requestHandler;
// exports.sometext = 'Some hard coded text';