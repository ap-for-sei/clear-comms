const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    name: String,
    img: String
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;