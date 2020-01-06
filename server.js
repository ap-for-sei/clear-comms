const express = require('express');
const app = express();
const methodOverride = require('method-override');
const port = 3000;
require('./db/db.js');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// controllers
const topicsController = require('./controllers/topics.js');
app.use('/topics', topicsController);

const postsController = require('./controllers/posts.js');
app.use('/posts', postsController);

const usersController = require('./controllers/users');
app.use('/auth', usersController);

// main route
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});