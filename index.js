const express = require('express');
const app = express();
const port = 8000;




// Seting up the view engint - ejs
const ejs = require('ejs');
app.set('view engine','ejs');
app.set('views','./views');

//We wil be storing the asset files such as css and js in the assets folder
app.use(express.static('./assets'));


app.get('/home',(req,res)=>{
    res.render('home',{
        port
    });
})

app.listen(port,(err)=>{
    if(err){
        console.log(`There is an error running the server at port ${port}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
});