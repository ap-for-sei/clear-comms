const express = require('express');
const router = express.Router();
const Topic = require('../models/topic.js');
const Post = require('../models/post.js');

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

router.get('/new', (req, res) => {
	Topic.find({}, (err, allTopics) => {
		res.render('posts/new.ejs', {
			topics: allTopics
		});
	});
});

router.post('/', async (req, res) => {
    try {
        await Post.create(req.body);

        res.redirect('/posts');
    } catch (err) {
        res.send(err);
    }
});

router.get('/:id', async (req, res) => {
    try  {
        const foundPost = await Post.findById(req.params.id);

        res.render('posts/show.ejs', {
            post: foundPost,
        });
    } catch (err) {
        res.send(err);
    }
});

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

router.put('/:id', async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, req.body);

        res.redirect(`/posts/${req.params.id}`);
    } catch (err) {
        res.send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.id);

        res.redirect('/posts');
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;