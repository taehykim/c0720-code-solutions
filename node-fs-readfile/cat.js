/* eslint-disable no-console */
const fs = require('fs');

let i = 2;

const cb = (err, data) => {
  if (err) throw err;
  console.log(data);
  i++;
  if (i < process.argv.length) {
    fs.readFile(process.argv[i], 'utf8', cb);
  }
};

fs.readFile(process.argv[i], 'utf8', cb);
