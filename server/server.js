const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const User = require('./models/User');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

// sets view engine to PUG
app.set('views', './views');
app.set('view engine', 'pug');

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// CORS Allowed
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
  });
});
// Route Handlers
const postsRoute = require('./routes/post');
app.use('/posts', postsRoute);

const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  await connectDB();
  const server = app.listen(PORT, () => {
    console.log(
      ` Server running in ${process.env.NODE_ENV} , App listening on port ${PORT}!`
        .yellow.bold
    );
  });
};
startServer();
