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

module.exports = getTheCount;