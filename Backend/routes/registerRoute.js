const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");


router.post('/register',
  body('username').isLength({ min: 3, max: 20 }),
  body('phoneNumber').isLength({ min: 10, max: 10 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }
  ), async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.array() });
      }
      let newuser = await User.findOne({ email: req.body.email });
      if (newuser) {
        return res.status(400).send('User with this email already exists');
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();
      res.status(201).send({
        message: `${req.body.username} Registered Successfully`,
        result: savedUser,
      });
    }
    catch (err) {
      console.error('Error saving user:', err);
      res.status(500).send('Error registering user, please enter a valid email', err);
    }
  });

module.exports = router;