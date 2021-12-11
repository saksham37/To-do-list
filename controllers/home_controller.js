const todolist = require('../model/todolist');
module.exports.home = function(req,res){

    todolist.find({},(err,todolist)=>{
        if(err){
            console.log("Cannot fetch data from the database ",err);
            return;
        }
        res.render('home',{
            animateType: 'animate-exit',
            rotateAngle : '',
            todolist
        });

    });
    
};