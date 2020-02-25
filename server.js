const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});