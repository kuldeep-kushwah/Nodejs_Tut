const dbconnect=require('./mongodb');

const insert=async()=>{
    let coll=await dbconnect();
    console.log('kya chl rha h 1');
 
   let res= await coll.insertMany([
    { name:'vinay', email:'vinayrandi75@gmail.com' },
    { name:'satyam',email:'kumarsatyam34@gmail.com'}
     ]);
   console.log(res);
 }

 insert();
