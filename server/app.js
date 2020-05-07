/* Requerir el módulo dotenv es necesario para
poder trabajar con las variables de entorno. */
require('dotenv').config();

// Requerimos nuestro sevidor web, Express.
const express = require('express');
/* Importamos el módulo "cors" para trabajar con el
intercambio de recursos de origen cruzado. */
const cors = require('cors');
/* Requerimos "mongoose" para poder interactuar con nuestra
base de datos "MongoDB". */
const mongoose = require('mongoose');
/* El módulo "body-parser" nos permitirá pasar información a través
del cuerpo de la petición. */
const bodyParser = require('body-parser');
/* El módulo express-session es un middleware que se utiliza para 
trabajar con sesiones. */
const session = require("express-session");
// Bcrypt nos servirá para encriptar información.
// En este caso encriptaremos la contraseña.
const bcrypt = require("bcrypt");
// Passport es un middleware de autenticación.
const passport = require("passport");
/* Módulo de que nos permite utlizar Passport con la estrategia
Local, la cual nos permite hacer log in mediante el método
usuario-contraseña. */
const LocalStrategy = require("passport-local").Strategy;

/* Requerimos nuestra configuración de la base de datos. */
require("./configs/db.config");
/* Requerimos nuestra configuración de "Passport". */
require("./configs/passsport.config");

// Creamos el servidor "app" utilizando Express.
const app = express();

/* Utilizamos el módulo "cors" para compartir los recursos
con la aplicación que esté corriendo en el puerto 3000. */
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))

// Configuración de express-session.
app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

/* El método ".json" nos permite pasar por el cuerpo archivos
de tipo "json". */
app.use(bodyParser.json());
/* "Urlencoded" nos permite pasar por el cuerpo de la petición
la información de un formulario. */
app.use(bodyParser.urlencoded({ extended: false }));

/* Habilitamos la utilización de los métodos de "passport" */
app.use(passport.initialize());
app.use(passport.session());

/* Declaramos nuestras rutas. */
const authRoutes = require('./routes/auth-routes');
const infoRoutes = require('./routes/info-routes');
/* Utilizamos el "router" correspondiente a esas rutas. */
app.use('/api/auth', authRoutes);
app.use('/api/info', infoRoutes);

/* Exportamos app para poder, en este caso, usarlo en
el archivo www, que se encuentra dentro del directorio
bin. */
module.exports = app;
