/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = (acc, curr) => acc + curr;
const sum = numbers.reduce(add);

const multiplier = (acc, curr) => acc * curr;
const product = numbers.reduce(multiplier);

const transactions = (acc, curr, currIndex, arr) => {
  if (curr.type === 'deposit') {
    return acc + curr.amount;
  }
  if (curr.type === 'withdrawal') {
    return acc - curr.amount;
  }
};

const balance = account.reduce(transactions, 0);

const takeProps = (acc, curr, currIndex, arr) => {
  acc[Object.keys(curr)[0]] = curr[Object.keys(curr)[0]];
  return acc;
};

const composite = traits.reduce(takeProps, {});

console.log(sum);
console.log(product);
console.log(balance);
console.log(composite);
