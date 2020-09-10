const express = require('express');
const fs = require('fs');
const app = express();

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const notesData = JSON.parse(data).notes;
  app.get('/api/notes', (req, res, next) => {
    const notes = [];
    for (const prop in notesData) notes.push(data[prop]);

    res.status(200).json(notes);
  });
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
