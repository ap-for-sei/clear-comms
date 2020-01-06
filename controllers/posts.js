const express = require('express');
const router = express.Router();
const Topic = require('../models/topic.js');
const Post = require('../models/post.js');

router.get('/', (req, res) => {
    Post.find({}, (err, foundPosts) => {
        res.render('posts/index.ejs', {
            posts: foundPosts
        });
    });
});

router.get('/new', (req, res) => {
	Topic.find({}, (err, allTopics) => {
		res.render('posts/new.ejs', {
			topics: allTopics
		});
	});
});

router.post('/', (req, res) => {
	Post.create(req.body, (err, createdPost) => {
		res.redirect('/posts');
	});
});

router.get('/:id', async (req, res) => {
	Post.findById(req.params.id).populate('topic').exec((err, foundPost) => {
		res.render('posts/show.ejs', {
			post: foundPost
		});
	});
});

router.get('/:id/edit', (req, res) => {
	Post.findById(req.params.id, (err, foundPost) => {
		Topic.find({}, (err, allTopics) => {
			res.render('posts/edit.ejs', {
				post: foundPost,
				topics: allTopics
			});
		});
	});
});

router.put('/:id', (req, res) => {
	Post.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/posts');
	});
});

router.delete('/:id', (req, res) => {
	Post.findByIdAndRemove(req.params.id, () => {
		res.redirect('/posts');
	});
});

module.exports = router;