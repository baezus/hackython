const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', (res) => {
  console.log('MongoDB connected; collection is watchopolis.')
});

mongoose.connection.on('error', (error) => {
  console.log('Error: ', error);
});

module.exports = {
  User: require('./User'),
};
