const mongoose = require("mongoose");
mongoose.set("strictQuery" ,true);

const mongo_URI = process.env.MONGO_URI;

async function connectToMongo(){
    console.log("connecting to database");
    try {
       let x = await mongoose.connect("mongodb://127.0.0.1:27017/dbpractise") 
       console.log("connection to database:" + x.connection[0].name);
       return true;
    } catch (error) {
        return false;
        
    }
}
module.exports = connectToMongo;