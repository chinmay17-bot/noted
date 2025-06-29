const express= require('express');
const app= express();

//load configs
require('dotenv').config();

const PORT= process.env.PORT || 4000;

//server start
app.listen(PORT, ()=>{
    console.log("Server running on "+ PORT);
})

//DB connect
const dbConnect = require('./config/database');
dbConnect();


//midlleware PARSER
app.use(express.json());

//route prefix 
const todoRoutes= require('./routes/todos')
app.use('/api/v1', todoRoutes);


//default route
app.get('/', (req, res)=>{
    res.send(`<h1>server is running<\h1>`)
})