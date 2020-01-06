const express = require('express');
const router = express.Router();

const Topic = require('../models/topic.js');
const Post = require('../models/post.js');

// new route
router.get('/new', (req, res) => {
    res.render('topics/new.ejs');
});

// create route
router.post('/', async (req, res) => {
	try {
		await Topic.create(req.body);
		
		res.redirect('/topics');
	} catch (err) {
		res.send(err);
	}
});

// index route
router.get('/', async (req, res) => {
	try {
		const foundTopics = await Topic.find();
 
		res.render('topics/index.ejs', {
			topics: foundTopics
		});
		
	} catch (err) {
		res.send(err);
	}
});

// show route
router.get('/:id', async (req, res) => {
	try {
		const foundTopic = await Topic.findById(req.params.id);

		const topicsPosts = await Post.find({ topic: foundTopic._id });

		res.render('topics/show.ejs', {
			topic: foundTopic,
			posts: topicsPosts
		});
		
	} catch (err) {
		res.send(err);
	}
});

//edit route
router.get('/:id/edit', async (req, res) => {
	try {
		const foundTopic = await Topic.findById(req.params.id);

		res.render('topics/edit.ejs', {
			topic: foundTopic
		});
		
	} catch (err) {
		res.send(err);
	}
});

// update route
router.put('/:id', async (req, res) => {
	try {
		await Topic.findByIdAndUpdate(req.params.id, req.body);
		
		res.redirect(`/topics/${req.params.id}`);
	} catch (err) {
		res.send(err);
	}
});

// delete route
router.delete('/:id', async (req, res) => {
	try {
		await Topic.findByIdAndRemove(req.params.id);

		await Post.deleteMany({ topic: req.params.id });		
		res.redirect('/topics');
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;