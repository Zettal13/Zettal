const express = require('express');
const mongoose = require('mongoose')

const app = express()
const PORT = 8000

mongoose.connect('mongodb+srv://Ayushsingh:Ayushsingh13@cluster0.jyebrua.mongodb.net/Zettal')
.then(()=>{
    console.log('connected to database')
})
.catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/create", async (req, res) => {
  const User = mongoose.model("User", new mongoose.Schema({ name: String }));

  const data = await User.create({ name: "Test User" });

  res.json(data);
});
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))