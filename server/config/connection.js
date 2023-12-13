const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/IWFA-db'
);

// mongoose.connect('mongodb://127.0.0.1:27017/IWFA-db')

module.exports = mongoose.connection;