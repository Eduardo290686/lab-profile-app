// Requerimos nuestro sevidor web, Express.
const express = require('express');

// Creamos el servidor "app" utilizando Express.
const app = express();

app.get('/', (req, res) => {
  res.send('server');
})

app.listen(3001);