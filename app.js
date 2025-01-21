require("dotenv").config();
const express = require('express')

const app = express();
app.get("/", (req,res) =>{
    res.json("Welcome the node js app")
})
app.get("/home", (req,res) => {
    res.json("welcome again in home page")
})
const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("server is running on port 3000"))