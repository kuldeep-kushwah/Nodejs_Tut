const dbconnect=require('./mongodb');

const update=async()=>{

    let data=await dbconnect();
     let res= await data.updateMany({name:'satyam'},{$set:{name:'kumar',email:"kumar@gmail.com"}});
   console.log(res);
 }

 update();
