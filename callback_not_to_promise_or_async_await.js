var fs = require("fs");
console.log("ab");
<<<<<<< HEAD
//await只能修饰返回值为promise的函数
//then只能承接返回值为promise的函数
//fs.readFile("1.txt").then(()=>{console.log("fs")};);
//由此更加说明了callback和promise async-await是两种异步实现方式，
fs.readFile("1.txt",(err,data)=>{if(err){console.log("error");}else{console.log(data.toString());}})
=======
//必须加promises，否则不能连接then结构
fs.promises.readFile("1.txt").then(()=>{console.log("fs")});
//fs.readFile("1.txt",(err,data)=>{if(err){console.log("error");}else{console.log(data.toString());}})
>>>>>>> 5de28d75a334a78a4004b0849b32da97ca6b626c
console.log("cd");
