/* eslint-disable no-console */
let count = 3;
const myVar = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(myVar);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
