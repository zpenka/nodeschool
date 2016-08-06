const createDecipher = require('crypto').createDecipher;

process.stdin
.pipe(createDecipher('aes256', process.argv[2]))
.pipe(process.stdout);

