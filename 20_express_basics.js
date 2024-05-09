// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen


const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})
app.get('*',(req,res)=>{
    res.status(404).send('<h1>Page Not Found </h1>')
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})
// A status code of 304 (Not Modified) means that the requested resource has not 
// been modified since the last request. This typically happens when the client 
// (browser) sends a request with a conditional header like "If-Modified-Since" 
// or "If-None-Match", and the server determines that the resource has not been 
// modified since the version the client has cached.

// In your case, it seems like the browser is caching the response for the 
// "/about" route, and when you reload the page, the browser sends a request 
// with headers indicating that it wants to know if the resource has been modified.
//  The server then responds with a 304 status code to indicate that the resource 
//  hasn't been modified, and the browser loads the cached version instead of 
//  fetching the entire resource again.

// To prevent this behavior during development, you can disable caching or use 
// browser tools to clear the cache before reloading the page. In production, 
// caching can improve performance, but it's essential to set proper cache-control 
// headers to ensure that clients fetch updated resources when necessary.