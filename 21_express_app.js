const express=require('express')
const path=require('path')
const app=express()

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})
