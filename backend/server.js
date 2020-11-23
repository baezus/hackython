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


// ------------------------ Middleware

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Dot Env
require('dotenv').config();

//Passport config

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});

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
