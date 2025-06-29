const Todo = require("../models/todo");
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "Fetched succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err,
    });
  }
};

module.exports = { getTodos };
