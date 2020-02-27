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

// @route   GET api/projects/:_id
// @desc    Get project by id
// @access  Public
router.get("/:_id", async (req, res) => {
	try {
		const { _id } = req.params;
		let project = await Project.find({ _id });
		if (!project || project.length === 0) {
			return res.status(404).json({ err: "Project not found" });
		}
		res.json(project[0]);
	} catch (error) {
		if (error.kind === "ObjectId") {
			return res.status(404).json({ err: "Project not found" });
		}
		console.error(error.message);
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
				link,
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
				link,
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
// @route   PUT api/projects
// @desc    Update Projects
// @access  Private
router.put(
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
				link,
				casestudy,
				tags,
				date,
				_id,
			} = req.body;

			date = new Date(Date.parse(date));
			tags = tags.split(",").map((tag) => tag.trim());

			const projectData = {
				title,
				description,
				image,
				github,
				link,
				casestudy,
				tags,
				date,
			};

			const project = await Project.findOneAndUpdate(
				{ _id },
				projectData,
				{
					new: true,
				}
			);

			if (!project || project.length <= 0) {
				res.status(404).json({
					err: "Project not found",
				});
			}

			await project.save();

			res.json(project);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server error");
		}
	}
);

// @route   DELETE api/projects/:id
// @desc    Delete Project by ID
// @access  Private
router.delete("/:_id", auth, async (req, res) => {
	const { _id } = req.params;
	try {
		await Project.findByIdAndDelete({ _id });
		res.json({ msg: "Project Deleted" });
	} catch (error) {
		console.error(error.message);
		res.status(404).json({ err: "Project not found" });
	}
});

module.exports = router;
