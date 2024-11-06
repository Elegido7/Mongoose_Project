const Person = require('../models/person');

const queryChain = (done) => {
  Person.find({ favoriteFoods: 'burritos' })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec((err, people) => {
      if (err) return done(err);
      done(null, people);
    });
};

module.exports = queryChain;
