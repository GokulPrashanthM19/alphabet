const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
    name: "account",
    mixins: [DbService],
    adapter: new MongoDBAdapter("mongodb://localhost/Account"),
    collection: "company",
    settings: {
        fields: ["_id", "company_name", "firstname", "emailid", "phoneno", "role", "domain", "createdby"]
    },

    actions: {

        async createcollection(ctx) {

            var parsebody = ctx.params;

            let domain = parsebody.emailid.split('@')
            let temdomain = domain[1].split('.')
            let finalval = temdomain[0];


            const value = await this.adapter.find({
                query: {
                    domain: finalval
                }
            })



            if (value.length == 0) {
                ctx.params.role = 'owner';
                await this.adapter.createCollection(finalval, ctx.params);
                ctx.params.domain = finalval;
                ctx.params.createdby = new Date();
                this.adapter.insert(ctx.params)

                return ' value is 0';
            } else {
                ctx.params.role = 'user';
                this.adapter.createCollection(finalval, ctx.params);
                return value.length;
            }


        },

        async deleteuser(ctx) {

            var parsebody = ctx.params;
            let domain = parsebody.emailid.split('@')
            let temdomain = domain[1].split('.')
            let finalval = temdomain[0];


            const value = await this.adapter.find({
                query: {
                    domain: finalval
                }
            })

            if (value.length == 0) {
                return 'User Does not Exists'
            } else {

                return this.adapter.removeByID(finalval, ctx.params.emailid);

            }


        },


    }
}