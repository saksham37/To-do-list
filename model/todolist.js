const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    category: {
        type : String,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required : true
    },
    date: {
        type: Date,
        required:true
    }
}); 

const todolist = mongoose.model('todolist',todolistSchema);

module.exports = todolist;