/* Requerimos el módulo "dotenv" para poder utilizar
variables de entorno. */
require('dotenv').config();

// Requerimos nuestro sevidor web, Express.
const express = require('express');

// Creamos el servidor "app" utilizando Express.
const app = express();

app.get('/', (req, res) => {
  res.send('server');
})

app.listen(process.env.PORT);