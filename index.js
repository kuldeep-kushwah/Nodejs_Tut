const http=require("http");
const fs=require('fs');
const data=require('./data');
const input=process.argv;

if(input[2]=='add')
{
   fs.writeFileSync(input[3],input[4]);
   console.log("file has been created!")
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]);
}

console.log("server ruuning on port 5000 ...");
console.log(input);




// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-t':'application/json'});
//     res.write(JSON.stringify(data));
//    // res.write(JSON.stringify({Name:'kuldeep',email:'kuldeepkushwah529@gmail.com'}));
//     res.end();
// }).listen(5000);