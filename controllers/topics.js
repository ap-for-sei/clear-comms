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

router.get('/:id', (req, res) => {
    Topic.findById(req.params.id, (err, foundTopic) => {
        res.render('topics/show.ejs', {
            topic: foundTopic
        });
    });
});

router.post('/', (req, res) => {
    Topic.create(req.body, (err, createdTopic) => {
        res.redirect('/topics');
    });
});

router.delete('/:id', (req, res) => {
    Topic.findByIdAndRemove(req.params.id, () => {
        res.redirect('/topics');
    });
});

router.get('/:id/edit', (req, res) => {
    Topic.findById(req.params.id, (err, foundTopic) => {
        res.render('topics/edit.ejs', {
            topic: foundTopic
        });
    });
});

router.put('/:id', (req, res) => {
    Topic.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/topics');
    });
});

module.exports = router;