const express = require('express');
const fs = require('fs');
const data = require('./data');
const app = express();

const getNotes = data => {
  const notes = [];
  for (const prop in data.notes) notes.push(data.notes[prop]);
  return notes;
};

const isValidId = id => {
  return Number.isInteger(id) && id > 0;
};

app.get('/api/notes', (req, res, next) => {
  const notes = getNotes(data);
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res, next) => {
  const notes = getNotes(data);
  const id = Number(req.params.id);

  if (!isValidId(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    const currIndex = notes.findIndex(elm => elm.id === id);
    if (currIndex === -1) {
      return res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    res.json(notes[currIndex]);
  }
});

app.use(express.json());
app.post('/api/notes', (req, res, next) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  const newNote = { id: data.nextId, content: req.body.content };
  data.notes[data.nextId] = newNote;
  data.nextId++;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      /* eslint-disable no-console */
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
      return;
    }
    res.status(201).json(newNote);
  });
});

app.delete('/api/notes/:id', (req, res, next) => {
  const notes = getNotes(data);
  const id = Number(req.params.id);

  if (!isValidId(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    const currIndex = notes.findIndex(elm => elm.id === id);
    if (currIndex === -1) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }

    delete data.notes[id];

    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        /* eslint-disable no-console */
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        return;
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  const notes = getNotes(data);
  const id = Number(req.params.id);
  if (!isValidId(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  const currIndex = notes.findIndex(elm => elm.id === id);
  if (currIndex === -1) {
    res.status(500).json({ error: `cannot find note with id ${id}` });
    return;
  }

  data.notes[id].content = req.body.content;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      /* eslint-disable no-console */
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
      return;
    }
    res.status(200).json(notes[currIndex]);
  });
});

app.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Listening on port 3000!');
});
