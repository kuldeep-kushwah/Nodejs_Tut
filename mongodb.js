const {MongoClient}=require('mongodb');
const uri="mongodb://localhost:27017"
const client=new MongoClient(uri);
const database_name='e-com';

 async function dbconnect(){
     let result=await client.connect(database_name);
      let get_db=result.db(database_name);
      return get_db.collection('products');
    
}

module.exports=dbconnect;