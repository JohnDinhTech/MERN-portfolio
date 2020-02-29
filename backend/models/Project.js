const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	github: {
		type: String,
	},
	link: {
		type: String,
	},
	casestudy: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Project = mongoose.model("project", ProjectSchema);
