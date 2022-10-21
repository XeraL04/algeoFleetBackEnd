const {MongoClient} = require ('mongodb')

const client = new MongoClient("mongodb://localhost:27017")
const database = client.db("active_tracking")

// First we get the name and how many collections there is inside that database
function findTheCollectionName(database) {
    return new Promise (async resolve => {
        await database.listCollections().toArray(async function(err,theName){
            resolve(theName);
        })
    })
}

module.exports = findTheCollectionName