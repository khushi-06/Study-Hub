const express = require("express");
const router = new express.Router();

const Authenticate = require("../middleware/authenticate");

// logout page
router.get("/logout", Authenticate, (req, res) => {
	try {
		res.clearCookie("jwt", { path: "/" });
		res.status(201).send("User logout!");
	  } catch (error) {
		console.error("Logout error:", error);
		res.status(500).send("Error occurred during logout.");
	  }
});

module.exports = router;