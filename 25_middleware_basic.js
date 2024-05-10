// const express=require('express')
// const app=express()

// // req => middleware => res
// app.get('/',(req,res)=>{
//     const method =req.method
//     const url=req.url
//     const time=new Date().getUTCFullYear()
//     console.log(method,url,time)
//     res.send('Home')
// })


// app.get('/about',(req,res)=>{
//     const method =req.method
//     const url=req.url
//     const time=new Date().getDate
//     console.log(method,url,time)
//     res.send('About')
// })

// app.listen(3000,()=>{
//     console.log('server running on port 3000')
// })


const express=require('express')
const app=express()

const logger=(req,res,next)=>{
    const method =req.method
    const url=req.url
    const time=new Date().getUTCFullYear()
    console.log(method,url,time)    
    next()
}
app.get('/',logger,(req,res)=>{
    res.send('Home')
})


app.get('/about',logger,(req,res)=>{
      res.send('About')
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})