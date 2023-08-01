const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { body } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;


router.post('/login',
  body('email').isEmail().normalizeEmail(),
  body('password', 'Password cannot be blank').exists()
  , async (req, res) => {

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({
          message: "No user exist with this email",
        });
      }

      const passwordCheck = await bcrypt.compare(password, user.password)
      if (!passwordCheck) {
        return res.status(400).send({
          message: "Invalid Credentials! Please try again with correct credentials", error
        });
      }

      // create jwt token
      const data = {
        user: {
          userId: user.id,
          userEmail: user.email,
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.status(200).send({
        message: "Login Successful",
        user,
        token: authtoken,
      });
    }
    catch (error) {
      console.error('Error during login:', error);
      res.status(500).send({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  });

module.exports = router;
