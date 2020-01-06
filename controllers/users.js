const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

// login create route
router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({ username: req.body.username });
        if (foundUser) {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                res.redirect('/topics');
            } else {
                res.redirect('/');
            }
        } else {
            res.redirect('/');
        }
    } catch(err){
        res.send(err);
    }
});

// register create route
router.post('/registration', async (req, res) => {
    const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    const userDbEntry = {
        username: req.body.username,
        password: passwordHash,
        email: req.body.email
    };

    try {
        const createdUser = await User.create(userDbEntry);
        res.redirect('/topics');
    } catch(err) {
        res.send(err);
    }
});

module.exports = router;