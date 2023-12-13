const db = require('../config/connection');
const {User} = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});

  await User.insertMany(userData);

  console.log('Database seeded!');
  process.exit(0);
});