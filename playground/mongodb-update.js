const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://172.17.0.2:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect to mongo DB server');
  }
//  console.log('Connected to mongo DB server');


  db.collection('Users').findOneAndUpdate(
    {_id:new ObjectID('58da74532fdcf87ae60cfe52')},//filter
    { //update
      $set:{
        name:'Shrilekha'
      },
      $inc:{
        age:4
      }
    },
    {
      returnOriginal:false
    }//option to return updated collection
).then((res)=>{
  console.log(JSON.stringify(res,undefined,2));
}).catch((e)=>{console.log(e);});


//   db.collection('Todos').findOneAndUpdate(
//     {_id:new ObjectID('58db585b4f9e4470494a6768')},//filter
//     { //update
//       $set:{
//         completed:true
//       }
//     },
//     {
//       returnOriginal:false
//     }//option to return updated collection
// ).then((res)=>{
//   console.log(JSON.stringify(res,undefined,2));
// }).catch((e)=>{console.log(e);});



});
