//Express
const express = require('express');
const router = express.Router();

//MongoDB
const db = require('../models');

//Current path = '/user'

//show user

const index = (req, res) => {
  console.log('Home page');
  const response = 'you made it to the index';
  res.json({ response: response });
} 

const show = (req, res) => {
  console.log('Made it to the user show route.');
  db.User.findById(req.params.id)
  .then((foundUser) => {
    res.json({ user: foundUser });
  })
  .catch((err) => {
    console.log('Error in showing user: ', err);
    res.json({ Error: 'unable to get data.' });
  })
};

//new user
const create = async (req,res) => {
  console.log(req.body);
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
};

module.exports = {
  index,
  show,
  create,
};
