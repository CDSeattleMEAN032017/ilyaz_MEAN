var mongoose = require('mongoose');
var todoList = mongoose.model('todoList');

module.exports = {
  create: function(req, res ) {
    toDo = new todoList(req.body);
    toDo.save(function(err) {
      res.json(err);
    })
  },
  getIndex: function( req, res ) {
    todoList.find({}, function(err, data ) {
      if ( err ){
        res.json(err)
      } else { res.json(data) }
    })
  },
  checked: function( req, res ) {
    todoList.findOne({_id: req.body.id}, function(err, data ) {
      if( data.completed ) {
        data.completed= "";
      }
      else{
        data.completed = new Date();
      }
      data.save(function(err) {
        res.json(err);
      })
    })
  }
}
