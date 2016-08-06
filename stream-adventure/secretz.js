const crypto = require('crypto');
const tar = require('tar');
const zlib = require('zlib');
const concat = require('concat-stream');

const cipher = process.argv[2];
const pw = process.argv[3];

const parser = tar.Parse();

parser.on('entry', (e) => {
  if (e.type !== 'File') {
    return;
  }

  const h = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(h).pipe(concat((hash) => {
    console.log(`${hash} ${e.path}`);
  }));
});

process.stdin
.pipe(crypto.createDecipher(cipher, pw))
.pipe(zlib.createGunzip())
.pipe(parser);

