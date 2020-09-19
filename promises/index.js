/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const chance = takeAChance('Tia');

chance.then(msg => {
  console.log(msg);
});

chance.catch(err => {
  console.log(err.message);
});
