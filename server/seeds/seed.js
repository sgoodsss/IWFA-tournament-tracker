const db = require('../config/connection');
const { Admin, Form, User, Event } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const eventData = require('./eventData.json');
const formData = require('./formData.json');
const adminData = require('./adminData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Admin', 'admin');
  await cleanDB('Event', 'events');
  await cleanDB('Form', 'forms');


  await User.insertMany(userData);
  // await Event.insertMany(eventData);
  await Admin.insertMany(adminData);
  await Form.insertMany(formData);

  console.log('Database seeded!');
  process.exit(0);
});