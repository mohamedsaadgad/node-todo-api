//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true } ,  (err, db) => {
   
 if(err){
    return console.log('Unable to connect to MongoDB server');
 }

    console.log('Connected to MongoDB server');
   
    db.db('TodoApp').collection('Todos').find({
       _id:new ObjectID("5c71bf273c1b1002207a911d")
      }).toArray().then((docs) => {
       console.log('Todos');
       console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
       console.log('Unable to fetch todos', err);
    });
    
    // db.db('TodoApp').collection('Users').find({name:'Mohamed'}).toArray().then((docs) => {
    //  console.log('Todos');
    //  console.log(JSON.stringify(docs, undefined, 2));
    //  }, (err) => {
    //  console.log('Unable to fetch todos', err);
    //  });


  //db.db('TodoApp').collection('Todos').find().count().then((count) => {
  // console.log(`Todos count :${count}`);
  //  }, (err) => {
  // console.log('Unable to fetch todos', err);
  // });
    //db.close();
  });