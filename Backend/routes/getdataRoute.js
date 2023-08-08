const express = require('express');
const router = express.Router();
const Users = require('../models/user');
const Authenticate = require("../middleware/authenticate");


// data of users
router.post("/getuser", Authenticate, async (req, res, next) => {
	try {
		const userProfile = await Users.findById(req.user.id);

		userProfile.password = undefined;
		userProfile.cpassword = undefined;

		res.status(201).send({ userProfile });
	} catch (error) {
		return next(new Error(error.message));
	}
});

module.exports = router;

