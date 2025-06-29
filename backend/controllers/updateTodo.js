const Todo = require("../models/todo");
const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedTime = Date.now();
    const response = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: updatedTime }
    );
    res.status(200).json({
      success: true,
      data: response,
      message: "Updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err,
    });
  }
};

module.exports = { updateTodo };
