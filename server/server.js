const express=require('express')
const bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log('From app /todos method',req.body);
  var todo=new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);

  });

});

//read todos GET /todos/id

app.listen(3000,()=>{
  console.log('Started on port 3000');
});
