const concat = require('concat-stream');

process.stdin
.pipe(concat((buffer) => {
  console.log(buffer.toString().split('').reverse().join(''));
}));

