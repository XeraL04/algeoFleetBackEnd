const {MongoClient} = require ('mongodb')

const client = new MongoClient("mongodb://localhost:27017")
const database = client.db("active_tracking")

// Seconde we need to get the count of the documents (how many documents there is in each collection)

function getTheCount (collection) {
    let estimate = 0;

    return new Promise (async resolve => {
        try {
                // access to the databaseand the collections
            const myDocs = database.collection(collection);
            
                // impliment the estimate variable with the count of documents in each collection 
            estimate = await myDocs.estimatedDocumentCount();
            
        } catch (error) {
            console.log(error);
        }
            // resolve the promise with the implimated estimate variable
        resolve(estimate);
    })
}

module.exports=getTheCount;