const express = require("express");
const router = express.Router();
const sendMessage = require("../../nodemailer");
// @route   POST api/message
// @desc    Send
// @access  Public
router.post("/", async (req, res) => {
	try {
		const { fullName, from, number, message } = req.body;
		await sendMessage({ fullName, from, number, message });
		return res.json({ msg: "Message Sent" });
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ msg: "Message Failed To Send" });
	}
});

module.exports = router;
