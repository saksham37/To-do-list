const express = require('express');

const router = express.Router();

console.log('router loaded');

const homeController = require('../controllers/home_controller')
const addTodolist = require('../controllers/add-todolist');
const checkboxController = require('../controllers/checkbox_controller')

router.get('/home',homeController.home);
router.post('/add-todolist',addTodolist.addList);

router.post('/checkbox-input',checkboxController.checkbox);

module.exports = router;