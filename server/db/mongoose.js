var mongoose=require('mongoose')

mongoose.Promise=global.Promise
mongoose.connect('mongodb://172.17.0.2:27017/TodoApp')
console.log('Connected');

module.exports={
  mongoose:mongoose
};
