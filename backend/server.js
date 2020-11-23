//----------------------Requirements
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const methodOverride = ('method-override');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const cors = require('cors');

let corsOptions = {
  origin: 'http://localhost:3000'
};
app.use(express.json());
app.use(cors(corsOptions));
//Dot Env
require('dotenv').config();

//Middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Method Override
app.use(methodOverride('_method'));

//Routes

app.get('/', (req, res) => {
  res.render('index')
});

app.use('/users', routes.users);

app.use('*', (req, res) => {
  res.send('404!');
});

app.listen(PORT, () => { 
  console.log(`Server is tootin' and boopin' on port ${PORT}!`);
});
