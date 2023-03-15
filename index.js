const http=require("http");


console.log("server ruuning on port 5000 ...");





http.createServer((req,res)=>{
    res.writeHead(200,{'content-t':'application/json'});
    res.write(JSON.stringify(data));
   // res.write(JSON.stringify({Name:'kuldeep',email:'kuldeepkushwah529@gmail.com'}));
    res.end();
}).listen(5000);