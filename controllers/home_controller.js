const todolist = require('../model/todolist');
module.exports.home = function(req,res){

    let completed_list = [];
    let pending_list =[];

    todolist.find({checked:'false'},(err,list)=>{
        if(err){
            console.log("Cannot fetch data from the database ",err);
            return;
        }  
        pending_list = list;
        res.render('home',{
            rotateAngle: "rotate-135deg",
            animateType: "animate-enter",
            completed_list,
            pending_list
        });
    });

   
    todolist.find({checked:'true'},(err,list)=>{
        if(err){
            console.log("Cannot fetch data from the database ",err);
            return;
        }
        completed_list = list;
        res.render('home',{
            rotateAngle: "rotate-135deg",
            animateType: "animate-enter",
            completed_list,
            pending_list
        });
    });
    
};