"use strict";
const Post  = require('../models/post');
const User  = require('../models/user');

module.exports = {
	name: "post",
	settings: {

    },
    
	dependencies: [],	

	actions: {

		create: {
			params: {
				title: "string",
				content: "string",
				votes: "number",
				// author: "string",

			},
			async handler(ctx) {
				let author = await User.findOne({username: "huu490"});
				let { title, content, votes } = ctx.params;
				let post = new Post({
					title,
					content,
					votes,
					author: author._id,
				})
				let data = await post.save()
				return {status: true, message: "Success", data: data.populate('author')};
			}
		},

		list: {
			params: {
			},
			async handler(ctx) {
				let data = await Post.find({}).populate('author')
				return {status: true, message: "Success", data: data};
			}
		}
	},

	events: {

    },
    
	methods: {

	},

};