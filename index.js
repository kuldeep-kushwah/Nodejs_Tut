const express=require('express');
const http=require("http");
const fs=require('fs');
const path=require('path');
const app=express();
const filepath=path.join(__dirname,'public');

 
// app.use(express.static(filepath));

app.get('/',(req,res)=>{
    res.sendFile(`${filepath}/home.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${filepath}/about.html`)
})
app.get('*',(req,res)=>{

    res.sendFile(`${filepath}/pagenotfound.html`)
})

app.listen(5000,()=>{
    console.log('server on port 5000');
})


// app.get('/',(req,res)=>{
//     res.send(`
//     <h1>${req.query.name}</h1>
//     <h1>Nodejs is working fine </h1>
//     <a href="/about">about</a>  
//     `);
// })
// app.get('/about',(req,res)=>{
//      res.send(`
//     <h1>this is about page</h1>
//       <a href="/">Home</a>  
//      `)
// })




// let wait =new Promise((resolve,reject)=>{
     
//     setTimeout(()=>{
//         resolve(50);
//         console.log("data has been send..")
//     },2000);
// })

// wait.then((data)=>{
//    console.log(data);
// })



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






// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-t':'application/json'});
//     res.write(JSON.stringify(data));
//    // res.write(JSON.stringify({Name:'kuldeep',email:'kuldeepkushwah529@gmail.com'}));
//     res.end();
// }).listen(5000);