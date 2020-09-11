const express = require('express');
const fs = require('fs');
const app = express();

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const notesData = JSON.parse(data);
  const notes = [];

  app.get('/api/notes', (req, res, next) => {
    for (const prop in notesData.notes) notes.push(notesData.notes[prop]);

    res.status(200).json(notes);
  });

  app.get('/api/notes/:id', (req, res, next) => {
    for (const prop in notesData.notes) notes.push(notesData.notes[prop]);
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

  app.use(express.json());
  app.post('/api/notes', (req, res, next) => {
    for (const prop in notesData.notes) notes.push(notesData.notes[prop]);

    if (!req.body.content) { res.status(400).json({ error: 'content is a required field' }); }

    const newNote = { id: notesData.nextId, content: req.body.content };
    notes.push(newNote);

    notesData.notes = notes;
    notesData.nextId++;

    fs.writeFile('data.json', JSON.stringify(notesData, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
      res.status(201).json(newNote);
    });
  });
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
