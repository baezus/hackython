//Express
const express = require('express');
const router = express.Router();

//MongoDB
const db = require('../models');

//Current path = '/user'

//show user
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
const create = (req,res) => {
  console.log(req.body);
  db.User.create(req.body)
  .then((savedUser) => {
    res.status(201).json({ user: savedUser });
  })
  .catch((err) => {
    console.log('Error in User.create: ', err);
    res.json({ Error: 'Unable to create user.' })
  });
};

module.exports = {
  show,
  create,
};
