const express = require('express');

const app = express();

// app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Hello</h2>');
});

app.get('/redirect', (req, res) => {
  res.redirect('/');
});

app.get('/api/hello/:name', (req, res) => {
  name = req.params.name || '';
  res.json({
    msg: 'Hello ' + name,
  });
});

app.post('/api/users/login', express.json(), (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(8080, () => {
  console.log('Server started');
});
