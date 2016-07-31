const filteredList = require('./filter_ls_module');

const dir = process.argv[2];
const filter = process.argv[3];

filteredList(dir, filter, (err, filtered_list) => {
  if (err) {
    console.log('Something went wrong: ', err);
  }

  return filtered_list.forEach((file) => {
    console.log(file);
  });
});

