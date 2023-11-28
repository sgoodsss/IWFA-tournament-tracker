const express = require('express');
const path = require('path');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// MVC
// Views (API, HTML)

const app = express();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    // });
  } 

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
