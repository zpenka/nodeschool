const fs = require('fs');

module.exports = (dir, filter, done) => {
  if (typeof dir !== 'string') {
    //return done(new Error('dir must be a string'));
  }

  if (typeof filter !== 'string') {
    //return done(new Error('filter must be a string!'));
  }

  if (typeof done !== 'function') {
    //throw new Error('Callback not passed. Exploding.');
  }

  fs.readdir(dir, (err, list) => {
    if (err) {
      return done(err);
    }

    const filtered_list = list.filter((file) => {
      // Check for file's with extensions
      return file.indexOf('.') > -1 && file.indexOf(filter) > -1;
    });

    return done(null, filtered_list);
  });
};

