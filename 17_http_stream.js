 // const http=require('http')
// const { readFileSync } = require('fs')

// http.createServer((req,res)=>{
//     const text=readFileSync('./content/big.txt','utf-8');
//     res.end(text)
// }).listen(5000)



const http=require('http')
const {createReadStream}=require('fs')

http.createServer((req,res)=>{

    const fileStream= createReadStream('./content/big.txt','utf-8')

    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })

    fileStream.on('error',()=>{
        res.end(error)
    })

}).listen(5000)

