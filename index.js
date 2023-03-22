const express=require('express');
const multer=require('multer');

//require('./config');
// const product=require('./product');
// app.use(express.json());

const app=express();

const upload=multer({
     storage:multer.diskStorage({
          destination:function(req,file,cb){
               cb(null,"uploads");
          },
          filename:function(req,file,cb){
               cb(null,file.fieldname+'-'+Date.now()+'.jpg');
          }
     })
}).single('user_file');

app.post('/upload',upload,(req,res)=>{
    
     res.send('file uploading...');
})

app.listen(5000,()=>{
     console.log("server running on port 5000");
});