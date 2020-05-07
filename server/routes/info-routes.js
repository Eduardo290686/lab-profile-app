const express = require('express');
const infoRoutes = express.Router();

const Campus = require('../models/Campus');
const Course = require('../models/Course');

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

module.exports = infoRoutes;
