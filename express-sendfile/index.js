const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  const option = { root: __dirname };

  res.sendFile(req.originalUrl, option, err => {
    if (err) next(err);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
