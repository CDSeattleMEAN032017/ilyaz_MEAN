var mongoose = require('mongoose');

var todoListSchema = new mongoose.Schema( {
  toDoItem: { type: String, require: true, minlength: 2 },
  dueDate: { type: Date },
  completed: { type: Date },

}, { timestamps: true });

var todoList = mongoose.model('todoList', todoListSchema);
