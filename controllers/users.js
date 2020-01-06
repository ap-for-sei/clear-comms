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
                req.session.message = '';
				req.session.username = foundUser.username;
                req.session.logged = true;
                
                res.redirect('/topics');
            } else {
                req.session.message = 'username or password is incorrect';

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

        req.session.username = createdUser.username;
        req.session.logged = true;
        
        res.redirect('/topics');
    } catch(err) {
        res.send(err);
    }
});

// logout route
router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if(err){
			res.send(err);
		} else {
			res.redirect('/');
		}
	});
});

module.exports = router;