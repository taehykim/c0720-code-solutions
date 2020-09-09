const express = require('express');
const app = express();

const students = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  }
];

app.get('/api/grades', (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
