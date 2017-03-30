//const MongoClient=require('mongodb');
const {MongoClient,ObjectID}=require('mongodb');

// var user ={name:'Abhigyan',age:25};
// var {name}=user;//Object destructuring

//console.log(name);

var obj=new ObjectID();
console.log(obj);//We can gen our own so that we can gen our own ids

MongoClient.connect ( 'mongodb://172.17.0.2:27017/TodoApp',(err,db)=>{

    if(err){
    return  console.log('Unable to connect to mongo DB server');
    }
    console.log('Connected to mongo DB server' );




    // db.collection('Users').insertOne({
    //   name:'Shikha',
    //   age:'27',
    //   location:'Delhi'
    // },(err,result)=>{
    //   if(err){
    //     return console.log('Unable to write collection:',err);
    //   }
    //   console.log('Collection written successfully');
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });

    // db.collection('Todos').insertOne({
    //   text:'Something to do',
    //   completed:'false'
    // },(err,result)=>{
    //   if(err){
    //     return console.log('Unable to Insert todo:',err);
    //   }
    //   console.log(JSON.stringify(result.ops,undefined,2));
    // });
    db.close();
});
