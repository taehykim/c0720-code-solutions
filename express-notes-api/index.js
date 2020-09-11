const express = require('express');
const fs = require('fs');
const app = express();

const getNotes = data => {
  const notes = [];
  for (const prop in data.notes) notes.push(data.notes[prop]);
  return notes;
};

const isValidId = id => {
  return Number.isInteger(id) && id > 0;
};

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const notesData = JSON.parse(data);

  app.get('/api/notes', (req, res, next) => {
    const notes = getNotes(notesData);

    res.status(200).json(notes);
  });

  app.get('/api/notes/:id', (req, res, next) => {
    const notes = getNotes(notesData);
    const id = Number(req.params.id);

    if (!isValidId(id)) {
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
    const notes = getNotes(notesData);

    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
    }

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

  app.delete('/api/notes/:id', (req, res, next) => {
    const notes = getNotes(notesData);
    const id = Number(req.params.id);

    if (!isValidId) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else {
      const deleteIndex = notes.findIndex(elm => elm.id === id);
      if (deleteIndex === -1) {
        return res
          .status(404)
          .json({ error: `cannot find note with id ${id}` });
      }

      notes.splice(deleteIndex, 1);
      notesData.notes = notes;
      fs.writeFile('data.json', JSON.stringify(notesData, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        }
        res.sendStatus(204);
      });
    }
  });

  app.put('/api/notes/:id', (req, res, next) => {
    const notes = getNotes(notesData);
    const id = Number(req.params.id);
    if (!isValidId(id)) { res.status(400).json({ error: 'id must be a positive integer' }); }

    if (!req.body.content) { res.status(400).json({ error: 'content is a required field' }); }

    const updateIndex = notes.findIndex(elm => elm.id === id);
    if (updateIndex === -1) {
      res.status(500).json({ error: `cannot find note with id ${id}` });
    }

    notes[updateIndex].content = req.body.content;
    notesData.notes = notes;
    fs.writeFile('data.json', JSON.stringify(notesData, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
      res.status(200).json(notes[updateIndex]);
    });
  });
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
