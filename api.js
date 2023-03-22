const express=require('express');

const dbconnect=require('./mongodb');

const app=express();

app.use(express.json());

app.get('/',async(req,res)=>{
    let data=await dbconnect();
    data=await data.find().toArray();
    res.send(data);
})

app.post('/',async(req,res)=>{
    let data=await dbconnect();
    let resp=await data.insertOne(req.body);
   // console.log(resp);
    res.send(resp);
})


app.put('/:name',async(req,res)=>{
     let data=await dbconnect();
     let result= await data.updateOne({name:req.params.name},{$set:req.body});
     res.send(result);
})

app.delete('/:name',async(req,res)=>{
    let data=await dbconnect();
    let result=await data.deleteOne({name:req.params.name});
    res.send(result);
})


app.listen(5000,()=>{
    console.log("server is running on port 5000");
});