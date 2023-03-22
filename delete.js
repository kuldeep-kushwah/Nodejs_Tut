const dbconnect=require('./mongodb');

const deletedata=async()=>{
    let data=await dbconnect();
     let res= await data.deleteMany({name:'kumar'});
   console.log(res);
 }

 deletedata();
