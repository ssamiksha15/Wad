const connectToMongo = require("./db")
const express = require("express");

const app = express();
connectToMongo();

const port = process.env.PORT || 5000;
app.use(express.json());



app.listen(port,()=>{
    console.log(`App running on port no ${port}`)
});



