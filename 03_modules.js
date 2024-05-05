//modules = encapsulated code (only share minimum)
//commonJS, every file is module by default

const sayHi=require("./05_utlis");
const names=require("./04_names");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter); 