const express=require('express')
const app=express()

const{ products}=require('./data.js')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})
 


// responding all product with some detail only
app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product 
        return {id,name,image}
    }) 
    res.json(newProducts)
})



//responding a  product of particular id in generalized way using route parameter
// app.get('/api/products/2',(req,res)=>{
//     const newProduct=products.find((product)=>product.id===2) 
//     res.json(newProduct)
// })


// responding a  product of particular id in a generalized way using route parameter
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req.params)
    const {productID}=req.params
    // console.log(productID)
    // productID is string
    // console.log(typeof(productID))
    const newProduct=products.find((product)=>{return product.id===Number(productID)}); 
    console.log(newProduct)
    if(newProduct){
        return res.json(newProduct)
    }
        return res.status(404).send("Product do not exist") 
})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send("Hello World!!!!!")
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    // res.send("Hello World!!!!!")
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        // return res.status(200).send("No Product Matched your search");
        return res.status(200).json({success:true,data:[]})
    }
     res.status(200).send(sortedProducts)
    
})
app.listen(3000,()=>{
    console.log('server running on port 3000')
})
