require("dotenv").config();

const mongoose = require("mongoose");

const Campus = require("../models/Campus");
const Course = require("../models/Course");


mongoose
  .connect('mongodb://localhost/profile', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


let campus = [
  {
    city: "Madrid"
  },
  {
    city: "Barcelona"
  },
  {
    city: "Miami"
  },
  {
    city: "París"
  },
  {
    city: "Berlín"
  },
  {
    city: "Amsterdam"
  },
  {
    city: "Mexico"
  },
  {
    city: "Sao Paulo"
  },
  {
    city: "Lisbon"
  }
];

let courses = [
  {
    name: "WebDev"
  },
  {
    name: "UX/UI"
  },
  {
    name: "Data Analytics"
  }
];


Campus.deleteMany()
  .then(() => {
    return Campus.create(campus);
  })
  .then(createdCampus => {
    console.log(`${createdCampus.length} campus have been created with the following cities:`);
    console.log(createdCampus.map(campus => campus.city));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

Course.deleteMany()
  .then(() => {
    return Course.create(courses);
  })
  .then(createdCourses => {
    console.log(`${createdCourses.length} courses have been created with the following names:`);
    console.log(createdCourses.map(course => course.name));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
