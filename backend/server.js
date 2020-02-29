const express = require("express");
const { connectDB, connectGridFs } = require("./db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const app = express();

app.use(cors());
// Connect to DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
	res.send("Hello World");
});

const runAsyncServer = async () => {
	try {
		const { gfs, upload } = await connectGridFs();
		// Upload Image
		app.post("/upload", upload.single("image"), (req, res) => {
			res.redirect("/");
		});
		// Get Image by Id
		app.get("/image/:filename", async (req, res) => {
			const { filename } = req.params;
			try {
				const file = await gfs.find({ filename }).toArray();

				if (file.length === 0 || !file) {
					res.status(404).json({ err: "This file does not exist" });
					res.redirect("/");
				} else {
					gfs.openDownloadStreamByName(filename).pipe(res);
				}
			} catch (error) {
				res.status(404).json({ err: "This file does not exist" });
				console.error(error.message);
			}
		});
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ err: error.message });
	}
};

runAsyncServer();

// Use this to register users
// app.use("/api/users", require("./routes/api/users"));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/projects", require("./routes/api/projects"));
app.use("/api/message", require("./routes/api/message"));

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
