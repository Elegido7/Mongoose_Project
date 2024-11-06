const Person = require('../models/person');

const findPeopleByName = (name, done) => {
  Person.find({ name: name }, (err, people) => {
    if (err) return done(err);
    done(null, people);
  });
};

module.exports = findPeopleByName;
