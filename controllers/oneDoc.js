const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const oneCollectionController = {};
const paginate = require ('jw-paginate')

// const countOfDocument = require('../functions/collectionsCount.js')

const client = new MongoClient("mongodb://localhost:27017");
const database = client.db("active_tracking");



// function findTheCollectionName(database) {
//     return new Promise (async resolve => {
//         await database.listCollections().toArray(async function(err,theName){
//             resolve(theName);
//         })
//     })
// }



function getCollectionCounts(collection) {
    let estimate = 0 ;    
    return  new Promise(async resolve => {
        try {        
                
            const myDocs = database.collection(collection);            
            
            estimate = await  myDocs.estimatedDocumentCount();
            
        } catch(error){
            console.log(error);
        }
        resolve(estimate);
    });
}


oneCollectionController.getOneCollection = async (req, res) => {
    try {
        await client.connect();

        let nameCol = req.params.nameCollection

        const page = parseInt(req.params.p || 0);

        const docPerPage = parseInt(req.params.limit || 40);

        let size = await getCollectionCounts(nameCol); 
        
        // let collectionsList = await findTheCollectionName({name:nameCol})

        const pager = paginate(size, page, docPerPage)

        mongoose.connection.db
            .listCollections({name:nameCol})
            .next(async function(err, collinfo){
            if (collinfo) {
                let curCollection = database.collection(nameCol);
                
                let doq = curCollection.find({}).skip(docPerPage*page).limit(docPerPage)
 
                pageOfItems = await doq.toArray()

                res.json({pager, pageOfItems})
                // res.json(pageOfItems)
            } else {
                res.status(500).send('problem with the collection requested')
            }
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = oneCollectionController ;