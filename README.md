# alphabet

alphabet source contain the micro services build by nodejs and moleculer module.

Step 1:
To start:
npm install (to install node modules containing in the package.json file )

Setp 2:
npm install -g moleculer-cli
npm install moleculer-db --save
npm install moleculer-db-adapter-mongo --save


Step 3:
npm run dev ( to start app with micro services gateway api).


Step 4:

Below  is the two functions that implemented in molecular-db-adapter/src/index.js file. so please add those functions after installed the node modules.

	/**
	 * @param {String} newcollection
	 * @param {Object} data
	 * @returns {Promise} Return with the found document.
	 *
	 * @memberof MongoDbAdapter
	 */
	createCollection(newcollection, data) {
		return this.db.collection(newcollection).insertOne(data);
	}

	/**
	 * Find an entities by emailid.
	 * @param {String} collection
	 * @param {Object} data
	 * @returns {Promise} Return with the found document.
	 *
	 * @memberof MongoDbAdapter
	 */
	removeByID(collection, data) {
		return this.db.collection(collection).findOneAndDelete({ emailid: data }).then(res => res.value);
	} 

Step 5:
Database-Mongo
Database - Account
Collections are (new collection will create based on email domain when email domain does not exist in company table)
New Collection - (User table - insert the data into specific domain based on emailid).


OverView of micro services
Two separate micro services files to handle the API calls:
company.service.js
account.service.js

GateWay Service file: 
api.service.js

API's:

"GET /company/getallcompanylist" sample data ()
"DELETE /company/delete/:id" 
"POST /account/create" 
"DELETE /account/deleteuser" 


Below is the Postman Link:

https://www.getpostman.com/collections/98316d9dcdd206b38601


Docker did not supported to Windows 10. but it support for Windows 10 pro version.
In my machine i don't have Windows 10 pro.

POC is have created the Api's with micro service and mongo db used.













