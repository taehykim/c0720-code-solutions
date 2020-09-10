const express = require('express');
const app = express();

const grades = [
  { id: 1, name: 'Almond', course: 'CS', grade: 100 },
  { id: 2, name: 'Chocolate', course: 'CS', grade: 100 }
];

app.get('/api/grades', (req, res, next) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res, next) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === Number(req.params.id)) grades.splice(i, 1);
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
