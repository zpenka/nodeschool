const readdir = require('fs').readdir;

const dir = process.argv[2];
const filter = process.argv[3];

readdir(dir, (err, list) => {
  if (err) {
    throw new Error('Something went wrong.');
  }

  list.forEach((file) => {
    // Check for file's with extensions
    if (file.indexOf('.') > -1 && file.indexOf(filter) > -1) {
      console.log(file);
    }
  });
});
