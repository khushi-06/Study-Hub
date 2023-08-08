const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require("bcrypt");


router.post('/register',
  async (req, res, next) => {
    try {
      const { name, department, phoneNumber, email, password, cpassword } = req.body;

      if (!name || !department || !phoneNumber || !email || !password || !cpassword) {
        return next(new Error("All fields are mandatory"));
      }

      if (password !== cpassword) {
        return next(new Error("Password and Confirm Password not matching"));
      }

      let userExists = await User.findOne({ email: email });
      if (userExists) {
        return res.status(400).send('User with this email already exists');
      }
      const newUser = new User({
        name,
        department,
        phoneNumber,
        email,
        password,
        cpassword,
      });

      try {
        const savedUser = await newUser.save();
        res.status(201).send({
          message: `${req.body.name} Registered Successfully`,
          result: savedUser,
        });
      } catch (err) {
        if (err.code === 11000 && err.keyPattern.phoneNumber) {
          // Duplicate phoneNumber
          res.status(400).json({ error: 'Phone number already in use' });
        } else {
          // Other errors
          res.status(500).json({ error: 'An error occurred' });
        }
      }
    }
    catch (err) {
      console.error('Error saving user:', err);
      res.status(500).send('Error registering user, please enter a valid email', err);
    }
  });

module.exports = router;