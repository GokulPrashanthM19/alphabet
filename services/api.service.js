"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: http://moleculer.services/docs/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			whitelist: [
				// Access to any actions in all services
				"*"
			],
			aliases : {
				"GET /company/getallcompanylist" : "company.getallcompanylist",
				"DELETE /company/delete/:id" : "company.delete",
				"POST /account/create" :"account.createcollection",
				"DELETE /account/deleteuser" :"account.deleteuser"
			}

		}]

	}
};
