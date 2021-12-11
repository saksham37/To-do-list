const todolist = require('../model/todolist');

module.exports.checkbox = function(req,res){
 console.log(req.body);
 console.log("upar wala");

 if(typeof(req.body.checkbox)=="string"){
     console.log("its a string!!!!!!!!");
     todolist.findByIdAndDelete(req.body.checkbox,(err,item)=>{
         if(err){
             console.log("cannot delete from database",err);
             return;
         }
         
         console.log("Deleted ",item);
       
     });
     res.redirect('back');
    return;
 }
 const delete_tasks = req.body.checkbox;

 for(let i in delete_tasks){
     todolist.findByIdAndRemove(delete_tasks[i],(err,item)=>{
         if(err){
             console.log("Cannot delete from the database ",err);
             return;
         }
         console.log("Deleted ",item);
     });
 }
 res.redirect('back');
}