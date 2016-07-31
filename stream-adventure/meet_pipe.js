const createReadStream = require('fs').createReadStream;

const file = process.argv[2];

createReadStream(file).pipe(process.stdout);

