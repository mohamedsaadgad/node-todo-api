//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true } ,  (err, db) => {
   
 if(err){
    return console.log('Unable to connect to MongoDB server');
 }

    console.log('Connected to MongoDB server');
    
  //  db.db('TodoApp').collection('Todos').insertOne({
  //      text: 'Something to do',
  //      completed: false
  //  }, (err, result) => {
  //      if(err){
  //          return console.log('Unable to insert todo', err);
  //      }
  //      console.log(JSON.stringify(result.ops, undefined, 2));
  //  });
 // db.db('TodoApp').collection('Users').insertOne({
 //   name: 'Mohamed',
 //   age: 25
 //   }, (err, result) => {
 //   if(err){
 //       return console.log('Unable to insert user', err);
 //   }
 //   console.log(JSON.stringify(result.ops, undefined, 2));
 // });
    db.close();
});