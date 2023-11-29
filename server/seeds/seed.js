const db = require('../config/connection');
const { Admin, Form, User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const formData = require('./formData.json');
const adminData = require('./adminData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Form', 'forms');
  await cleanDB('Admin', 'admin');

  await User.insertMany(userData);
  await Form.insertMany(formData);
  await Admin.insertMany(adminData);

  console.log('Database seeded!');
  process.exit(0);
});