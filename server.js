const express = require('express');
const app = express();

const port = 3000;

const topicsController = require('./controllers/topics.js');
app.use('/topics', topicsController);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});