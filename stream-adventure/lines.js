const through = require('through2');
const split = require('split');
let odd = true;

process.stdin
.pipe(split())
.pipe(through(function(line, _, next) {
  if (odd) {
    this.push(line.toString().toLowerCase() + '\n');
  } else {
    this.push(line.toString().toUpperCase() + '\n');
  }

  odd = !odd;

  return next();
}))
.pipe(process.stdout);

