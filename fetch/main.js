/* eslint-disable no-console */
const myInit = { method: 'GET' };
fetch('https://jsonplaceholder.typicode.com/users', myInit)
  .then(response => response.json())
  .then(data => console.log(data));
