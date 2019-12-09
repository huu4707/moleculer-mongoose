const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
	title: {
		type: String,
		trim: true
	},
	content: {
		type: String,
		trim: true
	},
	votes: {
		type: Number,
		default: 0
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	status: {
		type: Boolean,
		default: true
	}

}, {
	timestamps: true
});

// Add full-text search index
PostSchema.index({
	"title": "text",
	"content": "text"
});

module.exports = mongoose.model("Post", PostSchema);