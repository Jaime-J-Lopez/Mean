const http = require('http');

const server = http.createServer((req, response ) => {
  response.end('This is my first response');
});

server.listen(process.env.PORT || 3000);

