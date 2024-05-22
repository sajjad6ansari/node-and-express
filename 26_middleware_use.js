// const express=require('express')
// const logger=require('./26_logger')
// const app=express()


// app.get('/',(req,res)=>{
//     res.send('Home')
// })
// app.use(logger)
// app.get('/api/products',(req,res)=>{
//     res.send('Products')
// })
// app.get('/items',(req,res)=>{
//     res.send('Items')
// })

// app.get('/about',(req,res)=>{
//       res.send('About')
// })

// app.listen(3000,()=>{
//     console.log('server running on port 3000')
// })


const express=require('express')
const app=express()

const logger=require('./26_logger')
const authorize = require('./authorize')

app.use([logger,authorize])

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/items',(req,res)=>{
    res.send('Items')
})

app.get('/about',(req,res)=>{
      res.send('About')
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})