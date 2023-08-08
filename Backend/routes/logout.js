const express = require("express");
const router = new express.Router();

const Authenticate = require("../middleware/authenticate");

// logout page
router.get("/logout", Authenticate, (req, res) => {
	res.clearCookie("jwt", { path: "/" });
	res.status(201).send("user logout!");
});

module.exports = router;