const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, '../client')));
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use((req, res, next) => {
  const err = new Error('That request could not be found.');
  err.status = 404;
  next(err);
});

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
})