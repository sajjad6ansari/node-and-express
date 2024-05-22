
const express=require('express')
const app=express()

//first need to install morgan
const morgan=require('morgan')

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.get('/about',(req,res)=>{
      res.send('About')
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})