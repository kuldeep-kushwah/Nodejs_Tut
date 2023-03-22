const express=require('express');
require('./config');
const app=express();

const product=require('./product');
app.use(express.json());

app.post('/create',async(req,res)=>{
      const data=new product(req.body);
      const result=await data.save();
     console.log(result);
     res.send(result);
})

app.get('/list',async(req,res)=>{
     const data=await product.find();
     console.log(data);
     res.send(data);
})

app.delete('/delete/:_id',async(req,res)=>{
     const result=await product.deleteOne(req.params);
     console.log(result);
     res.send(result);
})

app.put('/update/:_id',async(req,res)=>{
     const result=await product.updateOne(req.params,{$set:req.body});
     console.log(result);
     res.send(result);
})

app.listen(5000,()=>{
     console.log("server running on port 5000");
});