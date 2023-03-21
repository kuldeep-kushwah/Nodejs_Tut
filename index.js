const express=require('express');
const http=require("http");
const fs=require('fs');
const path=require('path');
const app=express();
const filepath=path.join(__dirname,'public');
const reqfilter=require('./middleware/middleware');
const route=express.Router();

const dbconnect=require('./mongodb');

const main=async()=>{
     let collection=await dbconnect();
     let coll_details=await collection.find({}).toArray();
     console.log(coll_details);
}
main();

// const insert=async()=>{
//    let coll=await dbconnect();
//    console.log(coll);
//   let res=coll.insertMany([{ name:'vinay', email:'vinayrandi75@gmail.com' },{
//    name:'satyam',
//    email:'kumarsatyam34@gmail.com'
//   }]);
// }

// insert();

// app.listen(5000,()=>{
//    console.log('server on port 5000');
// })
