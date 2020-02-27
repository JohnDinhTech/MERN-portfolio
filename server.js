const express = require("express");
const connectDB = require("./db");
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
	res.send("Hello World");
});

// Use this to register users
// app.use("/api/users", require("./routes/api/users"));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/projects", require("./routes/api/projects"));

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
