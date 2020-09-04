/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');

const displayNotes = () => {
  for (const prop in data.notes) {
    console.log(`${prop}: ${data.notes[prop]}`);
  }
};
const createNote = note => {
  data.notes[data.nextId] = note;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};

const deleteNote = noteId => {
  delete data.notes[noteId];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};

const updateNote = (noteId, updatedNote) => {
  data.notes[noteId] = updatedNote;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};

const operator = process.argv[2];

switch (operator) {
  case 'read':
    displayNotes();
    break;
  case 'create':
    createNote(process.argv[3]);
    break;
  case 'delete':
    deleteNote(process.argv[3]);
    break;
  case 'update':
    updateNote(process.argv[3], process.argv[4]);
    break;
  default:
    console.log(
      'Please run with a valid operator: read, create, delete or update'
    );
}
