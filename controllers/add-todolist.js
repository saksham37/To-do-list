const todolist = require('../model/todolist');

module.exports.addList = function(req,res){
    console.log(req.body);
    todolist.create({
        category: req.body.category,
        checked : false,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    },function(err,newItem){
        if(err){
            console.log("Cannot enter data into the database",err);
        }
        else{
            console.log("****",newItem);
        }
    });
    res.redirect('back');
};