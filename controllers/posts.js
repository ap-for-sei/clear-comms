const express = require('express');
const router = express.Router();

const Topic = require('../models/topic.js');
const Post = require('../models/post.js');

// new route
router.get('/new', async (req, res) => {
	try {
		const allTopics = await Topic.find();

		res.render('posts/new.ejs', {
			topics: allTopics
		});
	} catch (err) {
		res.send(err);
	}
});

// create route
router.post('/', async (req, res) => {
    try {
        await Post.create(req.body);

        res.redirect('/posts');
    } catch (err) {
        res.send(err);
    }
});

// index route
router.get('/', async (req, res) => {
    try {
		const foundPosts = await Post.find();

		res.render('posts/index.ejs', {
            posts: foundPosts,
		});
    } catch (err) {
		res.send(err);
    }
});

// show route
router.get('/:id', async (req, res) => {
    try  {
        const foundPost = await Post.findById(req.params.id).populate('topic');

        res.render('posts/show.ejs', {
            post: foundPost,
        });
    } catch (err) {
        res.send(err);
    }
});

// edit route
router.get('/:id/edit', async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id);

        const allTopics = await Topic.find();

        res.render('posts/edit.ejs', {
            post: foundPost,
            topics: allTopics,
        });
    } catch (err) {
        res.send(err);
    }
});

// update route
router.put('/:id', async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, req.body);

        res.redirect(`/posts/${req.params.id}`);
    } catch (err) {
        res.send(err);
    }
});

// delete route
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.id);

        res.redirect('/posts');
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;