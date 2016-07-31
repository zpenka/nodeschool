const get = require('http').get;

const url = process.argv[2];

return get(url, (res) => {
  res.setEncoding('utf8');

  res.on('data', (data) => {
    console.log(data);
  });
});
