const express= require('express');
const app= express();

const bodyparser= require('body-parser');
app.use(bodyparser.json);

app.listen(8000, ()=>{
    console.log("Server running");
})
