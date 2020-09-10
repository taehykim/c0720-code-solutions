const express = require('express');
const fs = require('fs');
const app = express();

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const notesData = JSON.parse(data).notes;
  const notes = [];

  app.get('/api/notes', (req, res, next) => {
    for (const prop in notesData) notes.push(notesData[prop]);

    res.status(200).json(notes);
  });

  app.get('/api/notes/:id', (req, res, next) => {
    for (const prop in notesData) notes.push(notesData[prop]);
    const id = Number(req.params.id);

    if (id <= 0 || !Number.isInteger(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else {
      if (notes.findIndex(elm => elm.id === id) === -1) {
        return res
          .status(404)
          .json({ error: `cannot find note with id ${id}` });
      }
      res.json(notes[notes.findIndex(elm => elm.id === id)]);
    }
  });
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
