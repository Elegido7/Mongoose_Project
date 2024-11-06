const Person = require('../models/person');

const createPerson = (done) => {
  const person = new Person({
    name: 'Dennis Trump',
    age: 27,
    favoriteFoods: ['Chapati', 'Sushi', 'Chicken'],
  });

  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

module.exports = createPerson;
