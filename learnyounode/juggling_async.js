const get = require('http').get;
const bl = require('bl');

const urls = process.argv.slice(2, process.argv.length);
const responses = [];

urls.forEach((url) => {
  get(url, (res) => {
    res.setEncoding('utf8');

    return res.pipe(bl((err, data) => {
      if (err) {
        console.log(err);
      }

      data = data.toString();

      const index = urls.indexOf(url);
      responses[index] = data;

      const is_done = responses.filter((response) => response).length === urls.length;

      if (is_done) {
        responses.forEach((response) => console.log(response));
      }
    }));
  });
});



