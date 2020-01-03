const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	postName: String,
	body: String,
	topic_id: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;