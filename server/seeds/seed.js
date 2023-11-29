const db = require('../config/connection');
const { Admin, Form, User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

db.once('open', async () => {
  await cleanDB('Tech', 'teches');

  await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});