const Todo = require("../models/todo");
const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      res.status(404).json({
        success: false,
        message: "No data found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
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

module.exports = { getTodo };
