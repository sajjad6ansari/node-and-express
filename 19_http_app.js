// const http=require('http')

// const server=http.createServer((req,res)=>{
//     console.log('user hit the user')
// })
// server.listen(5000)

const http=require('node:http')
const {readFileSync}=require('fs')

const homePage=readFileSync('./navbar-app/index.html')
const styles=readFileSync('./navbar-app/styles.css')
const logo=readFileSync('./navbar-app/logo.svg')
const homePageLogic=readFileSync('./navbar-app/browser-app.js')


const server=http.createServer((req,res)=>{
    //url
    const url=req.url
    //home page
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //styles
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(styles)
        res.end()
    }
    //logo
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(logo)
        res.end()
    }
    //logic
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homePageLogic)
        res.end()
    }
    // 404, resouce not found
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1> Page Not Found</h1>')
        res.end()
    }
})
server.listen(3000,()=>{
    console.log('server listening on port 5000')
})