module.exports= reqfilter=(req,res,next)=>{
    console.log('next');
    
    if(!req.query.age)
    {
        res.send("please provide age!")
    }
    else if(req.query.age<18)
    {
        res.send("below 18 not allowed to visit site")
    }
    else{
        next();
    }
 }