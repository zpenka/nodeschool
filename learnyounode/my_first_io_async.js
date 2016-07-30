const readFile = require('fs').readFile;

const file = process.argv[2];

readFile(file, (err, data) => {
  if (err) {
    throw new Error('Something went wrong');
  }

  // Subtract 1 because the length of the array will always be one more than the total number of lines
  const lines = data.toString().split('\n').length - 1;

  return console.log(lines);
});

