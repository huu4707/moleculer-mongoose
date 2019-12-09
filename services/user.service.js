"use strict";
const user  = require('../models/user');

module.exports = {
	name: "user",
	settings: {

    },
    
	dependencies: [],	

	actions: {

		async list() {
            let list = await user.find({});
			return {status: true, message: "Success", data: list};
		},

		welcome: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	events: {

    },
    
	methods: {

	},

	created() {

	},

	started() {

	},
	stopped() {

	}
};