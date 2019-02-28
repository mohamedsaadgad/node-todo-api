//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true } ,  (err, db) => {
   
 if(err){
    return console.log('Unable to connect to MongoDB server');
 }

    console.log('Connected to MongoDB server');
   // delete many
   // db.db('TodoApp').collection('Todos').deleteMany({text :'Eat lunch'}).then((result) =>{
   //    console.log(result);
   // });
   // delete one
   //   db.db('TodoApp').collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
   //      console.log(result);
   //   });
   //findOneAndDelete
   //db.db('TodoApp').collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
   //   console.log(result);
   //});
     db.db('TodoApp').collection('Users').deleteOne({_id:new ObjectID("5c728414b20dd222e19cde55")}).then((result) =>{
        console.log(result);
     });
    //db.close();
  });