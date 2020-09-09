const express = require('express');
const path = require('path');
const app = express();

const students = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  }
];

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/api/grades', (req, res, next) => {
  res.json(students);
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
