const combine = require('stream-combiner');
const through = require('through2');
const split = require('split');
const zlib = require('zlib');

module.exports = () => {
  let current = null;

  const write = function (line, _, next) {
    if (line.length === 0) {
      return next();
    }

    const row = JSON.parse(line);

    if (row.type === 'genre') {
      if (current) {
        this.push(JSON.stringify(current) + '\n');
      }

      current = { name: row.name, books: [] };
    } else if (row.type === 'book') {
      current.books.push(row.name);
    }

    return next();
  }

  const end = function (next) {
    if (current) {
      this.push(JSON.stringify(current) + '\n');
    }

    return next();
  }

  const grouper = through(write, end);

  return combine(split(), grouper, zlib.createGzip());
};
