const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const multer = require('multer')
require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config({path: './.env'})
const Apimodell = require('../database/db3')
const ResumeModel = require('../database/db2')
//app.use(express.json());
const DataModel = require('../database/db1.js');
app.use(bodyParser.json())
app.use(cors());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
const PORT = process.env.PORT || 4000
app.listen(PORT);
console.log(`The server is running at PORT ${PORT}`)
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null, new Date().toISOString().replace(/:/g, '-')+ '-'+ file.originalname)
    }
})

const filefilter = (req,file,cb)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/jpg'|| file.mimetype==='image/jpeg'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({
    storage:storage,
    fileFilter:filefilter
})
const fileSizeFormatter =(bytes,decimal) =>{
    if(bytes===0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ["Bytes","KB","MB","GB","TB","PB","EB","YB","ZB"];
    const index = Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes/Math.pow(1000,index)).toFixed(dm))+ ' ' +sizes[index];
}

app.post('/postresume',upload.single('file'),async(req,res)=>{
    try{
        const file = new ResumeModel({
            filename:req.file.originalname,
            filepath:req.file.path,
            // filesize:req.file.size,
            filetype:req.file.mimetype,
            filesize:fileSizeFormatter(req.file.size,2) //0.00
        });
        await file.save()
        res.status(201).json(file)
            }catch(e){
        res.status(400).send(e)
        console.log(e);
            }
        })
app.post('/apisubmit',async(req,res)=>{
    const {name,email,mobile,message} = req.body;
    if(!name || !email || !mobile || !message){
         return res.status(401).send('All inputs are compulsory!')                           
    }
    try{
        const findEmail = await DataModel.findOne({email:email})
        const findMobile = await DataModel.findOne({mobile:mobile})
        if(findEmail){
            return res.status(402).send('e')
        } if(findMobile){
            return res.status(403).send(`error`)      
        }
        const dataAdded = new DataModel({name,email,mobile,message});
    const saveData = await dataAdded.save();
    console.log(saveData);
    res.status(201).json(saveData);
    }catch(e){
    console.log(`Error faced is ${e}`)
    res.status(400).send(e);
    }
})

app.delete('/dvivek',async(req,res)=>{
    const deleteCommm = await DataModel.deleteMany({});
    res.status(201).send(deleteCommm);
 })

 app.delete('/dshibu',async(req,res)=>{
    const deleteCommm = await ResumeModel.deleteMany({});
    res.status(201).send(deleteCommm);
 })
 
app.get('/download',async(req,res)=>{
res.download("./download/Viveksresume.pdf.txt")
})

app.get('/api', async(req,res)=>{
    const respp = await ResumeModel.find({});
    console.log(respp);
    res.status(201).send(respp);
})

app.post('/postapis',async(req,res)=>{
    const {ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network}  = req.body
     try{
     const user_dataaa = new Apimodell ({ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network});
     await user_dataaa.save();
     console.log(user_dataaa);
     res.status(201).json({message: 'success!'});
 
  }catch(err){
    res.status(400).json(err);
    }
 })


 ////production stage
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../client/build")));
   app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client','build','index.html'));
   })
}

//lets see