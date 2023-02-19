// IMPORTS //

const express = require('express');
const path = require('path');
const catData = require('./db/availableCats.json');

// VARIABLES //

const PORT = 3001;
const app = express();

// MIDDLEWARE //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTES //

app.get('/about-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/about-me.html'));
})

app.get('/cats/:cat', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/cat.html'));
})

app.get('/api/cats', (req, res) => res.json(catData));

// LISTEN FOR CONNECTION //

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})