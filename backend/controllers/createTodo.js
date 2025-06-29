const Todo= require("../models/todo");
const createTodo= async(req,res)=>{
    try{
        const {title, description}= req.body;
        const response= await Todo.create({title, description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created"
            }
        )
    }catch(err){
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err
            }
        )
    }
}

module.exports= {createTodo};
