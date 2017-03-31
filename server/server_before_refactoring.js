var {mongoose}=require('./db/mongoose')
//Waits till it gets connection from DB

//save new something

//Mongoose Model

//var schema = new mongoose.Schema({ name: 'string', size: 'string' });
//var Tank = mongoose.model('Tank', schema);


var Todo=mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});


var newTodo=new Todo({   //mongoose keeps tracks of model changes,lowecases and pluralizes todo.
   //text:'  Complete this shit   ',
   text:'F**K YOU',
//   completed:true,
//   completedAt:(new Date()).getTime()
//
});

newTodo.save().then((res)=>{
  console.log('Saved Todo:',res);
},(err)=>{
  console.log('Unable to save Todo:',err);
});



// var mongoose=require('mongoose')
//
// mongoose.Promise=global.Promise;
//
// mongoose.connect('mongodb://172.17.0.2:27017/TodoApp')
//
// var User=mongoose.model('User',{
//   email:{
//     type:String,
//     minlength:1,
//     required:true,
//     trim:true
//   }
// });
//
// var otherUser=new User({
//   email:'abhigyan.dwivedi@gmail.com'
// });
//
//
// otherUser.save().then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.log(err);
// })
