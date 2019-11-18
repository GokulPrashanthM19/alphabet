const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
    name: "company",
    mixins: [DbService],
    adapter: new MongoDBAdapter("mongodb://localhost/Account"),
    collection: "company",
    settings: {
        fields: ["_id", "company_name", "firstname", "emailid", "phoneno", "role", "domain", "createdby"]
    },

    actions: {

        //list all the companies
        getallcompanylist(ctx) {

            return this.adapter.find({});
        },

        //remove specific company by _id
        async delete(cxt) {
            let delresullt = await this.adapter.removeById(cxt.params.id);
            return 'Successfully removed ' + delresullt.company_name + ' company';
        }

    }
}