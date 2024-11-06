const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Person schema code
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// Compiling the schema into a model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
