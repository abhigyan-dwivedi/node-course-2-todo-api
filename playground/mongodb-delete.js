const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://172.17.0.2:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect to mongo DB server');
  }
  console.log('Connected to mongo DB server');

  db.collection('Users').deleteMany({text:'Eat Lunch'}).then((res)=>{
    console.log(res);
  },(err)=>{});
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(err);
  // });

  // db.collection('Users').findOneAndDelete({ _id:new ObjectID('58da7631d35aaf61c9dc6afc')}).then((result)=>{
  //   console.log(result);
  // },(err)=>{});

  db.close();

});
