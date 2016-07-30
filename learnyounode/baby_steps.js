// Ignore the node executable path and the program file executable path arguments
const args = process.argv.slice(2, process.argv.length);

const sum = args.reduce((total, curr) => {
  const total_num = Number(total);
  const curr_num = Number(curr);

  if (isNaN(total_num) || isNaN(curr_num)) {
    throw new Error('Numbers were not passed');
  }

  return total_num + curr_num;
});

return console.log(sum);

