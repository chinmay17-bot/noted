const express = require("express");
const router = express.Router();

//get the controllers used
const { createTodo } = require("../controllers/createTodo");
const { getTodos } = require("../controllers/getTodos");
const { getTodo } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//paths
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

//exports
module.exports = router;
