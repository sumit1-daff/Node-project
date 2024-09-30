const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routers/user');
const app = express();
app.use(express.json());

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://sumitsingh1:kCclRcwoxdOCfXbE@cluster0.apsuo.mongodb.net/nodeProject');
}



app.use('/users',userRouter);
app.get('/',(req,res)=>{
    console.log("Hello World");
    res.json({"hii":"sumit"});
});


app.listen(8080,()=>{});