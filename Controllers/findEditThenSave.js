const Person = require('../models/person');

const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);

    person.favoriteFoods.push('hamburger');
    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

module.exports = findEditThenSave;
