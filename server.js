const express = require('express');
const app = express();

const port = 3000;

require('./db/db.js');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));

const topicsController = require('./controllers/topics.js');
app.use('/topics', topicsController);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});