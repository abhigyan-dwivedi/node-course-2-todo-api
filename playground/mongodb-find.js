//const MongoClient=require('mongodb');
const {MongoClient,ObjectID}=require('mongodb');


var obj=new ObjectID();
console.log(obj);//We can gen our own so that we can gen our own ids

MongoClient.connect ( 'mongodb://172.17.0.2:27017/TodoApp',(err,db)=>{

    if(err){
    return  console.log('Unable to connect to mongo DB server');
    }
    console.log('Connected to mongo DB server');

      //var cursor=db.collection('Users').find({ age:{ $gt : 20 } })

      // var cursor=db.collection('Users').find({ _id: new ObjectID('58da74532fdcf87ae60cfe52') });
      //
      // cursor.toArray().then((docs)=>{
      //   console.log('Users');
      //   console.log(JSON.stringify(docs,undefined,2));
      // },(err)=>{
      //   console.log('Unable to fetch users,',err);
      // });
      //

      // var cursor=db.collection('Users').find({location:{$regex:'.*elhi.*'}});
      //
      // cursor.count().then((count)=>{x
      //   console.log(`User's count ${count}`);
      // },(err)=>{
      //   console.log('Unable to fetch Users:',err);
      // });

      //db.collection.aggregate('Users').find({});

    db.collection('Users').find().toArray().then((res)=>{
      console.log('Users:');
      console.log(JSON.stringify(res,undefined,2));
    }).catch((e)=>{
      console.log('Unable to pass todos:',e);
    });//returns mongo cursor which is pointer to those docs
    //db.close()

});
