const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const Project = require("../../models/Project");
const { check, validationResult } = require("express-validator");

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get("/", async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/projects
// @desc    Create project
// @access  Private
router.post(
	"/",
	[
		auth,
		check("title", "Please enter a title").notEmpty(),
		check("description", "Please enter a description").notEmpty(),
		check("image", "Please enter a valid image url").isURL(),
		check("casestudy", "Please enter a valid case study link").isURL(),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			let {
				title,
				description,
				image,
				github,
				casestudy,
				tags,
				date,
			} = req.body;

			let project = await Project.find({ title });

			if (project.length > 0) {
				res.status(400).json({ err: "Project already exists" });
			}

			tags = tags.split(",").map((tag) => tag.trim());

			project = new Project({
				title,
				description,
				image,
				github,
				casestudy,
				tags,
				date,
			});

			await project.save();

			res.json(project);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
