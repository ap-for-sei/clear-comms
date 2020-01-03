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

module.exports = router;