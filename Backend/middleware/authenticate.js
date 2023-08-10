var jwt = require('jsonwebtoken');
const User = require("../models/user");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const JWT_SECRET = process.env.JWT_SECRET;

const Authenticate = async (req, res, next) => {
    try {
		const token = req.cookies.jwt;
		// req.cookies.token || req.header("Authorization").replace("Bearer", "");

		if (!token) {
			return next(new Error("Login first to access this page"));
		}

		const decoded = jwt.verify(token, JWT_SECRET );
		req.user = await User.findById(decoded.id);

		next();
	} catch (err) {
		return next(new Error("Token not found plzz Login", err.message));
	}
};


module.exports = Authenticate;