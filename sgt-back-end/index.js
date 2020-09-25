const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const query = `
    select
        *
    from "grades"`;

  db.query(query)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(404).json({ error: 'Cannot find grades' });
      } else {
        res.json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({ error: 'gradeId must be a postive integer' });
  }

  const query = `
    select 
        * 
    from "grades" 
    where "gradeId" = $1`;
  const params = [gradeId];

  db.query(query, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res
          .status(404)
          .json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const text = 'insert into grades(name,course,grade) values($1,$2,$3) returning *';
  const values = [];
  for (const prop in req.body) {
    values.push(req.body[prop]);
  }

  db.query(text, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({ error: 'gradeId must be a postive integer' });
  }

  const text = 'update grades set name =($1), course =($2), grade =($3) where "gradeId" =($4)';
  const values = [];
  for (const prop in req.body) values.push(req.body[prop]);
  values.push(gradeId);

  db.query(text, values)
    .then(result => {
      if (result.rowCount === 0) {
        res
          .status(404)
          .json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.status(200).json(req.body);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({ error: 'gradeId must be a postive integer' });
  }

  const text = 'delete from grades where "gradeId"=$1';
  const values = [gradeId];

  db.query(text, values)
    .then(result => {
      if (result.rowCount === 0) {
        res
          .status(404)
          .json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else res.sendStatus(204);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  /* eslint-disable-next-line no-console */
  console.log('Express server listening on port 3000');
});
