const createHTTPServer = require('http').createServer;
const parseUrl = require('url').parse;

const port = process.argv[2];

const server = createHTTPServer((req, res) => {
  const url = parseUrl(req.url, true);
  const path = url.pathname;
  const query = url.query;

  // Be a good web citizen :D
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (!query.iso) {
    // Require iso query
    res.end();
  }

  const date = new Date(query.iso);

  if (path === '/api/parsetime') {
    // Route parsetime
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    res.end(JSON.stringify({ hour, minute, second }));
  } else if (path === '/api/unixtime') {
    // Route unixtime
    res.end(JSON.stringify({ unixtime: date.getTime() }));
  }

  // End any requests that don't match this example's crazy requirements
  res.end();
});

server.listen(port);

