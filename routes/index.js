const express = require('express');

const router = express.Router();

console.log('router loaded');

const homeController = require('../controllers/home_controller')
const addTodolist = require('../controllers/add-todolist');


router.get('/home',homeController.home);
router.post('/add-todolist',addTodolist.addList);

module.exports = router;