// const { rejects } = require("assert");
// const {readFile}=require("fs");
// const { resolve } = require("path");

// const getText=(path)=>{
//       return new Promise((resolve,reject)=>{
//         readFile(path,"utf-8",(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//       })
// }

// getText("./content/first.txt")
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)}) 







// const {readFile}=require("fs");

// const getText=(path)=>{
//       return new Promise((resolve,reject)=>{
//         readFile(path,"utf-8",(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//       })
// }

// const  start=async()=>{
//     const first=await getText("./content/first.txt");
//     console.log(first);
// } 






// const {readFile}=require("fs");

// const getText=(path)=>{
//       return new Promise((resolve,reject)=>{
//         readFile(path,"utf-8",(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//       })
// }

// const  start=async()=>{
//     try{
//         const first=await getText("./content/first.txt");
//         const second=await getText("./content/second.txt");
//     console.log(first);
//     console.log(second);
//     }catch(error){
//         console.log(error);
//     }
// } 
// start();








// const {readFile,writeFile}=require('fs')
// const util=require('util')
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

// const start=async()=>{
//     try{
//         const first=await readFilePromise("./content/first.txt",'utf-8')
//         const second=await readFilePromise("./content/second.txt",'utf-8')
//         console.log(first)
//         console.log(second)
//         await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME ${first} ${second}`,{flag:'a'})

//     }catch(error){
//         console.log(error)
//     }
// }

// start();







// the best approach
const {readFile,writeFile}=require('fs').promises

const start=async()=>{
    try{
        const first=await readFile("./content/first.txt",'utf-8')
        const second=await readFile("./content/second.txt",'utf-8')
        console.log(first)
        console.log(second)
        await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME ${first} ${second}`,{flag:'a'})

    }catch(error){
        console.log(error)
    }
}

start();