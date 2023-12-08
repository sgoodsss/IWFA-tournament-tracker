const db = require('../config/connection');
const { Admin, Form, User, Event } = require('../models');

const userData = require('./userData.json');
// const eventData = require('./eventData.json');
const formData = require('./formData.json');
// const adminData = require('./adminData.json');

db.once('open', async () => {
  await User.deleteMany({});

  await User.insertMany(userData);

  console.log('Database seeded!');
  process.exit(0);
});