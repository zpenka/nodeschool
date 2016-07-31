const through = require('through2');

const end = (done) => {
  return done();
};

function write (buffer, encoding, next) {
  raw = buffer.toString();
  uppercase = raw.toUpperCase();

  this.push(uppercase);

  return next();
};

const stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);

