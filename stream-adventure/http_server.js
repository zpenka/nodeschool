const createHTTPServer = require('http').createServer;
const createWriteStream = require('fs').createWriteStream;
const through = require('through2');

const port = process.argv[2];

const write = function(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  return next();
}

const end = ((done) => done());

const stream = through(write, end);

const server = createHTTPServer((req, res) => {
  if (req.method === 'POST') {
    return req
    .pipe(stream)
    .pipe(res);
  }

  return res.end();
});

server.listen(port);

