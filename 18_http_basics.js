// const http=require('http')

// const server=http.createServer((req,res)=>{
//     console.log('user hit the user')
// })
// server.listen(5000)

const http=require('node:http')



const server=http.createServer((req,res)=>{
    //url
    const url=req.url
    //home page
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    //about page
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
        console.log('home')
    }
    //contact page
    else if(url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Contact Page</h1>')
        res.end()
        console.log('contact')
    }
    // 404, resouce not found
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1> Page Not Found</h1>')
        res.end()
        console.log('about')
    }
})
server.listen(3000,()=>{
    console.log('server listening on port 5000')
})