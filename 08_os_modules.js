//os module - a built-in module 
const os=require("os");
console.log(os.userInfo());
console.log(`uptime is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);