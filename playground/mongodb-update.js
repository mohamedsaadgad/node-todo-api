//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true } ,  (err, db) => {
   
 if(err){
    return console.log('Unable to connect to MongoDB server');
 }
    console.log('Connected to MongoDB server');
   
    // db.db('TodoApp').collection('Todos').findOneAndUpdate(
    //    {_id: new ObjectID("5c72a6ceb20dd222e19ce07d")},
    //    { $set: {completed:true} },
    //    { returnOriginal: false }
    //    ).then((result) =>{
    //       console.log(result);
    //    });
       db.db('TodoApp').collection('Users').findOneAndUpdate(
          {_id:new ObjectID("5c71d4fe369ce115d02f57aa")},
           {$set:{name:'Mohamed'},$inc:{age:+1}},
          {returnOriginal:false}
          ).then((result) =>{
            console.log(result);
        });
       

    //db.close();
  });