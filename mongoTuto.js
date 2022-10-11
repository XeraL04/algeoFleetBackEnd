// import {MongoClient} from 'mongodb';
const MongoClient = require('mongodb').MongoClient

const URL = "mongodb://localhost:27017"

const client = new MongoClient(URL);

// client.connect().then(result => {
//     // define the db
//   const database = client.db("cinema");

//     // define the collection
//   const collection = database.collection("films");

//   console.log(result);
// }, err => {
//   console.log(err);
// });

(async () => {
  await client.connect();
  const database = client.db("the_companys_database");
  const collection = database.collection("users");

  // insert data : 
  // const result =await collection.insertOne({name: "hello"})
  // console.log(result.insertedId);
  
  // find data 
  let userCursor = await collection.find({})
    // convert that cursor into an array:
  // let users = await userCursor.toArray();
  
    // iterating over the cursor in case of a lot of data: back to iterate cursor latter
  while (await userCursor.hasNext()){
    let user = await userCursor.next();
    console.log(user);
  }

  // console.log(users);

  client.close();

})();








// const mongoClient = require('mongodb').MongoClient
// const express = require('express')

// const app = express();

// app.use(express.json());

// const mongoUrl = "mongodb://localhost:27017/"
// let db


// process.on("uncaughtException",(err,data) => {
//   if (err) {
//     console.log("Critical error...");
//   }
// })

// // mongoClient.connect(mongoUrl,(err, res)=>{
// //   if (err) {console.log('database connection error');
// //   return;
// // }

// // db = res.db("active_tracking")

// //   // db.collection("data_7306353057827205988").find({}).toArray((err,res)=>{
// //   //     if (err) {
// //   //         console.log('database error cannot read');
// //   //       return;
// //   // }
// //   // console.log(res);
// //   // });
// // })



// app.get("/", (req,res)=>{
//   try {
    
// mongoClient.connect(mongoUrl,(err, res)=>{
//   if (err) {console.log('database connection error');
//   return;
// }

// db = res.db("active_tracking")

//   db.collection("data_7306353057827205988").find({}).toArray((err,res)=>{
//       if (err) {
//           console.log('database error cannot read');
//         return;
//   }
//   res.status(200).json(res)
//   console.log(res);
//   });
// })
//   } catch (error) {
//     res.status(500).json(error);
//   }
// })

// app.listen(9000)