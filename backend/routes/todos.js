const express= require('express');
const router= express.Router();

const {createTodo}= require('../controllers/createTodo');

//paths

//create a todo
router.post('/createTodo', createTodo);


//exports
module.exports= router;