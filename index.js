const express = require('express');
const app = express();
const port = 8000;
const ejs = require('ejs');



// Seting up the view engint - ejs

app.set('view engine','ejs');
app.set('views','./views');

//We wil be storing the asset files such as css and js in the assets folder
app.use(express.static('./assets'));


//for redirecting every route to index.js in the routes folder

app.use('/',require('./routes'));

// app.get('/home',(req,res)=>{
//     res.render('home',{
//         port
//     });
// })

app.listen(port,(err)=>{
    if(err){
        console.log(`There is an error running the server at port ${port}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
});