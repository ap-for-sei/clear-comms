const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	postName: String,
	body: String,
	topic: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topic'
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;