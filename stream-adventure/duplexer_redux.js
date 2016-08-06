const duplexer = require('duplexer2');
const through = require('through2').obj;

module.exports = (counter) => {
  const counts = {};

  const write = (row, _, next) => {
    counts[row.country] = (counts[row.country] || 0) + 1;
    return next();
  }

  const end = (done) => {
    counter.setCounts(counts);
    return done();
  }

  const input = through(write, end);

  return duplexer({ objectMode: true }, input, counter);
};
