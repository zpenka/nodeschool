const get = require('http').get;
const bl = require('bl');

const url = process.argv[2];

return get(url, (res) => {
  res.setEncoding('utf8');

  return res.pipe(bl((err, data) => {
    if (err) {
      console.log(err);
    }

    data = data.toString();

    console.log(data.length);
    console.log(data);
  }));
});

