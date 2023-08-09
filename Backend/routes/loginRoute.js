const express = require('express');
const router = new express.Router();
const Users = require('../models/user');
const bcrypt = require("bcrypt");

router.post('/login',
  async (req, res) => {

    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Plz Filled the data" });
      }

      const checkUser = await Users.findOne({ email });
      if (!checkUser) {
        return res.status(404).json({
          message: "No user exist with this email",
        });
      }

      const checkPassword = await bcrypt.compare(password, checkUser.password)
      if (!checkPassword) {
        return res.status(400).json({
          message: "Invalid Credentials! Please try again with correct credentials"
        });
      }

      // create jwt token
      const token = await checkUser.generateAuthToken();

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 1800000),
        httpOnly: true,
      });

      res.status(200).json({
        message: "Login Successful",
        token: token,
      });
    }
    catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  });

module.exports = router;
