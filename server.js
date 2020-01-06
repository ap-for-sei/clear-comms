const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const port = 3000;
require('./db/db.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
	secret: "ilovesecrets",
	resave: false,
	saveUninitialized: false
}));

// controllers
const topicsController = require('./controllers/topics.js');
app.use('/topics', topicsController);

const postsController = require('./controllers/posts.js');
app.use('/posts', postsController);

const usersController = require('./controllers/users');
app.use('/auth', usersController);

// main route
app.get('/', (req, res) => {
	res.render('index.ejs', {
		message: req.session.message,
		logged: req.session.logged
	})
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});