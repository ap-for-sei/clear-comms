const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('topics/index.ejs');
});

router.get('/new', (req, res) => {
    res.render('topics/new.ejs');
});

module.exports = router;