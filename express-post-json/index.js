const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());
app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  grades.push(req.body);
  res.status(201);
  res.send(req.body);
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
