const createTCPServer = require('net').createServer;
const port = process.argv[2];

const server = createTCPServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth().length === 2 ? 1 + date.getMonth() : `0${1 + date.getMonth()}`;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const response = `${year}-${month}-${day} ${hours}:${minutes}`;

  return socket.end(response + '\n');
});

server.listen(port);
