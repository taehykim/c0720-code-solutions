/* eslint-disable no-console */
const plus = require('./add');
const minus = require('./subtract');
const times = require('./multiply');
const over = require('./divide');
let result = 0;

const operator = process.argv[3];
switch (operator) {
  case 'plus':
    result = plus.plus(Number(process.argv[2]), Number(process.argv[4]));
    break;
  case 'minus':
    result = minus.minus(Number(process.argv[2]), Number(process.argv[4]));
    break;
  case 'times':
    result = times.times(Number(process.argv[2]), Number(process.argv[4]));
    break;
  case 'over':
    result = over.over(Number(process.argv[2]), Number(process.argv[4]));
    break;
}

console.log(`result: ${result}`);
