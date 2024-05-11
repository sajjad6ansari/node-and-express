// const express=require('express')
// const logger=require('./26_logger')
// const app=express()

// app.use(logger)
// app.get('/',(req,res)=>{
//     res.send('Home')
// })
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


const endpoint = 'http://pladrac.net/download';
const params = new URLSearchParams({
    id: 'NDA3OTAy',
    typesub: 'dramacool-SUB',
    title: 'Shooting Stars (2024) episode 3'
});

fetch(`${endpoint}?${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Process the fetched data here
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
