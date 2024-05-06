// const http=require("http");

// const server=http.createServer((req,res)=>{
//     res.write("Welcome to our website")
//     res.end();
// });

// server.listen(5000,()=>{
//     console.log("server is listening n port 5000..");
// })

const http=require("http");

const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        res.end("Welcome to home page!!!!!!!");
    }
    else if(req.url==="/about"){
        res.end("this is about website and our services!!!!");
    }
    else{
        res.end(`
    <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
    `);
    }


});

server.listen(5000,()=>{
    console.log("server is listening n port 5000..");
})