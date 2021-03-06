//----------------------Requirements
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const methodOverride = ('method-override');
const session = require('express-session');
const passport = require('passport');
// const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const cors = require('cors');
const WebSocket = require('ws');
const db = require('./models');

let corsOptions = {
  origin: ['http://localhost:3000']
};
app.use(express.json());
app.use(cors(corsOptions));


// ------------------------ Middleware

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//WebSocket

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

//Dot Env
require('dotenv').config();

//Passport config

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());
// app.use(flash());
// app.use((req, res, next) => {
//   res.locals.success = req.flash('success');
//   res.locals.error = req.flash('error');
//   res.locals.currentUser = req.user;
//   next();
// });

//Method Override
// app.use(methodOverride('_method'));

//Routes
const routes = require('./routes');

//Home
app.get('/', (req, res) => {
  res.render('index')
});

//Users
app.use('/user', routes.user);

//Passport User Create Route
app.post('/signup', async(req, res) => {
  try {
    const newUser = new db.User({username: req.body.username, name: req.body.name})
    const registeredUser = await db.User.register(newUser, req.body.password)
    req.login(registeredUser, err => {
    if (err) return console.log(err);
    // req.flash('success', 'Thanks for registering!');
    res.redirect(`user/${req.user._id}`)})}
    catch(e) {
    // req.flash('error', e.message);
    res.redirect('signup');
  }
})

//Error route
app.use('*', (req, res) => {
  res.send('404!');
});

server.listen(PORT, () => { 
  console.log(`Server is tootin' and boopin' on port ${PORT}!`);
});

