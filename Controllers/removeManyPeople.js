const Person = require('../models/person');

const removeManyPeople = (done) => {
  Person.remove({ name: 'Mary' }, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
};

module.exports = removeManyPeople;
