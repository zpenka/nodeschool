const request = require('request');

const r = request.post('http://localhost:8099');

process.stdin.pipe(r).pipe(process.stdout);

