// Load environment variables from .env file
const mongoose = require('mongoose');
require('dotenv').config();
const controllers = require('./Controllers');

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));

// Using a controller function
controllers.createPerson((err, data) => {
  if (err) return console.error(err);
  console.log('Person created:', data);
});
