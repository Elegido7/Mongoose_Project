const createPerson = require('./createPerson');
const createManyPeople = require('./createManyPeople');
const findPeopleByName = require('./findPeopleByName');
const findOneByFood = require('./findOneByFood');
const findPersonById = require('./findPersonById');
const findEditThenSave = require('./findEditThenSave');
const findAndUpdate = require('./findAndUpdate');
const removeById = require('./removeById');
const removeManyPeople = require('./removeManyPeople');
const queryChain = require('./queryChain');

module.exports = {
  createPerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain,
};
