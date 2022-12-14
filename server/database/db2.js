require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then((res)=>{
    console.log('Connected! 2')
}).catch((e)=>{
    console.log('No connection')
})

const ResumeSchema = new mongoose.Schema({
     filename:String,
     filepath:String,
     filetype:String,
     filesize:String,
})

const ResumeModel = new mongoose.model("filesdata",ResumeSchema)
module.exports = ResumeModel;