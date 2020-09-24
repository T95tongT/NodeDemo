/*
 * @Author: your name
 * @Date: 2020-09-24 14:15:02
 * @LastEditTime: 2020-09-24 16:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeJsDemo\src\1demo.js
 */
//读取系统的 cpu的信息。
// const os = require("os");
// const cpus = os.cpus();
// console.log(cpus.length)
// //获取内存的信息
// const total = os.totalmem();//返回的单位是字节。
// console.log(total/1024/1024/1024)
// const free = os.freemem();//剩余多少内存
// console.log(free/1024/1024/1024)

//web服务
const http = require("http");
const server = http.createServer((req, res)=>{
    res.end("helloww")
});
server.listen(3000, "127.0.0.1", ()=>{
    console.log("服务启动成功")
})