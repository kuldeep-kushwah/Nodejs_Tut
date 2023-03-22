const express=require('express');
require('./config');
const app=express();

const product=require('./product');
app.use(express.json());


app.get('/search/:key',async(req,res)=>{
      
     let data=await product.find({
          "$or":[
               {"name":{$regex:req.params.key}},
               {"category":{$regex:req.params.key}},
               
          ]
     });
     console.log(data);
     res.send(data);
})

app.listen(5000,()=>{
     console.log("server running on port 5000");
});