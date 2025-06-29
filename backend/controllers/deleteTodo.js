const Todo = require("../models/todo");
const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Todo.findByIdAndDelete(
      { _id: id },
    );
    res.status(200).json({
      success: true,
      data: response,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err,
    });
  }
};

module.exports = { deleteTodo };
