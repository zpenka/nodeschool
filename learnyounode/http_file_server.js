const createHTTPServer = require('http').createServer;
const createReadStream = require('fs').createReadStream;

const port = process.argv[2];
const file = process.argv[3];

const server = createHTTPServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });

  createReadStream(file).pipe(res);
});

server.listen(port);

