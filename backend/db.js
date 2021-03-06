const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const uri = process.env.MONGO_URI;
console.log(uri);
if (!uri) {
	console.log("Please config your .env file");
}

const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log("MongoDB Connected...");
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

const connectGridFs = async () => {
	try {
		const conn = await mongoose.createConnection(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		// init gfs
		const gfs = new mongoose.mongo.GridFSBucket(conn.db, {
			bucketName: "uploads",
		});

		// Storage
		const storage = new GridFsStorage({
			url: uri,
			file: (req, file) => {
				return new Promise((resolve, reject) => {
					crypto.randomBytes(16, (err, buf) => {
						if (err) {
							return reject(err);
						}
						const filename =
							buf.toString("hex") +
							path.extname(file.originalname);
						const fileInfo = {
							filename: filename,
							bucketName: "uploads",
						};
						resolve(fileInfo);
					});
				});
			},
		});

		const upload = multer({
			storage,
		});

		console.log("MongoDB Connected...");

		return {
			gfs,
			upload,
		};
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
module.exports = { connectDB, connectGridFs };
