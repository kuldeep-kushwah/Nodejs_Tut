const http=require("http");
const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname);
const filepath=`${dirpath}/apple.txt`;






//  fs.writeFileSync(filepath,"apple file has been created!");
//  fs.readFile(filepath,'utf8',(err,f)=>{
//     console.log("showing file content-> "+f);
//  })
// fs.appendFileSync(filepath," this is append file")
// fs.renameSync(filepath,`${dirpath}/mango.txt`,(err)=>{
//       if(!err)console.log("file has been updated!");
// });
//  fs.unlinkSync(`${dirpath}/mango.txt`)


// for(i=0;i<5;i++)
// {
//     fs.unlinkSync(dirpath+'/file'+i+'.txt',(err)=>{
//   if(!err)console.log(`${i} file has been deleted`)
//     });

// }

// fs.readdir(dirpath,(err,files)=>{
//       files.forEach((file)=>{
//        console.log(file);
//       })
// })



// const input=process.argv;


// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4]);
// }

// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('invalid input!')
// }

console.log("server ruuning on port 5000 ...");





http.createServer((req,res)=>{
    res.writeHead(200,{'content-t':'application/json'});
    res.write(JSON.stringify(data));
   // res.write(JSON.stringify({Name:'kuldeep',email:'kuldeepkushwah529@gmail.com'}));
    res.end();
}).listen(5000);