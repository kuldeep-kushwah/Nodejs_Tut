const dbconnect=require('./mongodb');

const insert=async()=>{
    let coll=await dbconnect();
    
 
   let res= await coll.insertMany([
    { name:'vinay', email:'vinayrandi75@gmail.com' },
    { name:'satyam',email:'kumarsatyam34@gmail.com'}
     ]);
   
 }

 insert();
