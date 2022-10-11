// import {MongoClient} from'mongodb';
const {MongoClient} = require ('mongodb')


const collectionController ={}

const client = new MongoClient("mongodb://localhost:27017")
const database = client.db("active_tracking")

function findTheCollectionName(database) {
    return new Promise (async resolve => {
        await database.listCollections().toArray(async function(err,theName){
            resolve(theName);
        })
    })
}

collectionController.getCollectionsName = async (req,res) =>{
    try {
        await client.connect();

        InfosColl = await findTheCollectionName(database);

        res.status(200).json(InfosColl)
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = collectionController;