// import {MongoClient} from'mongodb':
const {MongoClient} = require ('mongodb')

// importing modules:
const getTheCount = require('../functions/collectionsCount')
const findTheCollectionName = require('../functions/collectionsName')

const collectionController ={}

const client = new MongoClient("mongodb://localhost:27017")
const database = client.db("active_tracking")


// third we need to get the name collection from the first function and the count from the second function
    // than we will impliment the two results inside a tab to pass it to the final function

function nameAndCount(database){
    let newTab;

    return new Promise (async resolve => {
        let objTab = [];

            // invoking the first function so we get the name of the collections
        collectionsName = await findTheCollectionName(database);

            // start the implimentation of the newTab variable

                // we use the promise in the implimentation of a variable so we will implinet it only after getting the results from the seconde function 
            newTab = await new Promise(async resolve =>{

                    // using the for loop to itirate over and get the final table
                for(col of collectionsName){
                
                        // calling the second function to get the count of each collection
                    size = await getTheCount(col.name);
                    
                        // create a new obj to store the name and count of each collection 
                    let obj ={
                        name: col.name,
                        count: " " + size
                    }

                        // pushing the obj variable into the objtab
                    objTab.push(obj)
                };

                // get the results of the seconde variable of the first ppromise 
            resolve(objTab);
        });

            // get the result of the first variable with all the informations in it 
        resolve(newTab)
    
    })
}


// Finnaly we send every thing to the controller to the endPoint
collectionController.getCollectionsName = async (req,res) =>{
    try {
        await client.connect();

        InfosColl = await nameAndCount(database);

        res.status(200).json(InfosColl)
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = collectionController;