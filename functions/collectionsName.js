function findTheCollectionName(database) {
    return new Promise (async resolve => {
        await database.listCollections().toArray(async function(err,theName){
            resolve(theName);
        })
    })
}

module.exports = findTheCollectionName