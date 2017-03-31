const mongoose=require('mongoose')

mongoose.Promise=global.Promise;


mongoose.connect('mongodb://172.17.0.2:27017/TodoApp');

//Waits till it gets connection from DB

//save new something

//Mongoose Model

//var schema = new mongoose.Schema({ name: 'string', size: 'string' });
//var Tank = mongoose.model('Tank', schema);


var Todo=mongoose.model('Todo',{
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completedAt:{
    type:Number
  }
});


var newTodo=new Todo({   //mongoose keeps tracks of model changes,lowecases and pluralizes todo.
  text:'Cook Dinner',
  completed:true,
  completedAt:(new Date()).getTime()
});

newTodo.save().then((res)=>{
  console.log('Saved Todo:',res);
},(err)=>{
  console.log('Unable to save Todo:',err);
});
