const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const User = require('./models/User');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
  res.json({
    success: true,
  });
});
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    ` Server running in ${process.env.NODE_ENV} , App listening on port ${PORT}!`
      .yellow.bold
  );
});
