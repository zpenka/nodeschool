const trumpet = require('trumpet')();
const through = require('through2');

const loud = trumpet.select('.loud').createStream();

loud.pipe(through(function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  return next();
})).pipe(loud);

process.stdin.pipe(trumpet).pipe(process.stdout);

