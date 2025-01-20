require("dotenv").config();
const express = require('express')

const app = express();
app.get("/", (req,res) =>{
    res.json("Welcome the node js app")
})
const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("server is running on port 3000"))