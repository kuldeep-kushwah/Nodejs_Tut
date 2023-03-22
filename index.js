const mongoose=require('mongoose');

const url="mongodb://localhost:27017/e-com";

//mongoose
//used to create schema and validation of entry

//schema
// fields are the schema

//model
// model provide the connectivity bw nodejs and mongodb

 mongoose.connect(url);

const productSchema=new mongoose.Schema({
     name:String,
     price:Number,
     brand:String,
     category:String
    });

const saveInDb=async()=>{
    
     const product=new mongoose.model('product',productSchema);
     const data=new product({
          name:'apple 13',
          price:1000,
          brand:'apple',
          category:'Mobile'
     });
     let result=await data.save();
     console.log(result);
 
}

const updateInDb=async()=>{
     const product=new mongoose.model('product',productSchema);
     let result=await product.updateOne({name:'apple 13'},{$set:{name:"apple 13 pro max"}}) 
      console.log(result);
}

const deleteInDb=async()=>{
     const product =new mongoose.model('product',productSchema);
     let result=await product.deleteOne({name:"apple 13"});
     console.log(result);
}
const findInDb=async()=>{
     const product =new mongoose.model('product',productSchema);
     let result=await product.find({});
     console.log(result);
}


//findInDb();
deleteInDb();
//updateInDb();
//saveInDb();

