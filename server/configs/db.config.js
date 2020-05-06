/* Requerimos "mongoose" para poder interactuar con nuestra
base de datos "MongoDB". */
const mongoose = require('mongoose');

/* Mongoose.connect nos permite establecer la conexión con nuestra base
de datos. */
mongoose
  .connect('mongodb://localhost/profile', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  