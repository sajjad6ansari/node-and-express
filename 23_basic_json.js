const express=require('express')
const app=express()

const{ products}=require('./data.js')
app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})
