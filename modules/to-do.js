var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoapp',{useNewUrlParser: true});
var connection = mongoose.connection;

var toDoSchema = new mongoose.Schema({
    taskName: String,
});

var toDoModel = mongoose.model('tasks',toDoSchema);

module.exports = toDoModel;