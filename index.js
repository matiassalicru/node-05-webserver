const http = require("http");

http
  .createServer((req, res) => {
    console.log('Hola');

    res.writeHead(200)
    res.write('404 | Service not found');
    res.end();
  })
  .listen(3000);
