const express = require('express');
const infoRoutes = express.Router();

const Campus = require('../models/Campus');
const Course = require('../models/Course');
const User = require('../models/User');

infoRoutes.get('/campus', (req, res) => {
  Campus.find()
    .then((allCampus) => {
      res.send(allCampus);
    })
})

infoRoutes.get('/courses', (req, res) => {
  Course.find()
    .then((allCourses) => {
      res.send(allCourses);
    })
})

infoRoutes.get('/getUser/:id', (req, res) => {
  let userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      res.send(user);
    })
})

module.exports = infoRoutes;
