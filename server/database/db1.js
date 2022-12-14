require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log('Connected!')
}).catch((e)=>{
    console.log('No connection')
})

const SubmitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const DataModel = new mongoose.model("project3data",SubmitSchema)
module.exports = DataModel;