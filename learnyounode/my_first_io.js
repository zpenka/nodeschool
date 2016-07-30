const readFileSync = require('fs').readFileSync;

const file = process.argv[2];

// Subtract 1 because the length of the array will always be one more than the total number of lines
const lines = readFileSync(file).toString().split('\n').length - 1;

return console.log(lines);

