const path=require('path');
console.log(path.sep);

const filepath=path.join("/content",'subfolder','test.txt')
console.log(filepath)

const base=path.basename(filepath);
console.log(base)

const absolute=path.resolve(__dirname ,"content",'subfolder','test.txt');
console.log(absolute)
console.log(path.isAbsolute(filepath))

//output
// \
// \content\subfolder\test.txt
// test.txt
// C:\Users\SAJJAD ANSARI\Desktop\javascript learning\webcodes\node-and-expresss\content\subfolder\test
