const express = require('express');
const router = express.Router();

const Topic = require('../models/topic.js');

router.get('/', (req, res) => {
    Topic.find({}, (err, foundTopics) => {
        res.render('topics/index.ejs', {
            topics: foundTopics
        });
    });
});

router.get('/new', (req, res) => {
    res.render('topics/new.ejs');
});

router.post('/', (req, res) => {
    Topic.create(req.body, (err, createdTopic) => {
        res.redirect('/topics');
    });
});

module.exports = router;