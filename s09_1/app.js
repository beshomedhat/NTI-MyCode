//const mongodb = require('mongodb')
const {MongoClient, ObjectID } = require('mongodb')
//const mongoClient = mongodb.MongoClient
const conURL = "mongodb://127.0.0.1:27017"
const dbName = "ourDB"

MongoClient.connect(conURL,{userNewUrlParser:true},(err,client)=>{
    if(err) return console.log("db error")
    const db = client.db(dbName)
  
    //----------------------find one ---------------------
    // db.collection('student')
    // .findOne({
    //     _id: new ObjectID("5fddc5cd967b822f4ce214cc")},
    //  (err,data)=>{console.log(data)})

    //----------------------find all ---------------------
    // db.collection('student').find({name:"ahmed"}).toArray((err, data)=>{
    //             console.log(data)
    //         })
    //--------------delete one/many---------------------
    // db.collection('student').deleteOne({_id: new ObjectID("5fddc5cd967b822f4ce214cb")}).then(res=>console.log(res))
    // .catch(e=>console.log(e))
                                      //-------------------------
    // db.collection('student').deleteMany({_id: new ObjectID("5fddc5cd967b822f4ce214cb")}).then(res=>console.log(res))
    // .catch(e=>console.log(e))

    //------- Update ---------------
    // db.collection('student')
    // .updateOne({_id: new ObjectID("5fddc5cd967b822f4ce214cb")}
    // ,{$set:{name:"hassan"}})
    // .then(result=> console.log(result))
    // .catch(e=>console.log(e)) 


    //-----------------insert Many ---------------
    // db.collection('student').insertMany([
    //     {
    //         name:"besho",
    //         class:"d"
    //     },
    //     {
    //         name:"ahmed",
    //         class:"a"
    //     }
    // ])
})