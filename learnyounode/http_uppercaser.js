const createHTTPServer = require('http').createServer;
const createReadStream = require('fs').createReadStream;
const mapStream = require('through2-map');

const port = process.argv[2];

const server = createHTTPServer((req, res) => {
  if (req.method === 'POST') {
    res.writeHead(200, { 'content-type': 'text/plain' });

    req.pipe(mapStream((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});

server.listen(port);

