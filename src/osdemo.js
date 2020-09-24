const os = require("os");
console.log("操作系统特定的行末标识符：os.EOL", os.EOL);
const cpus = os.cpus();
console.log("cpus的信息", cpus, os.EOL, cpus.length);
console.log("endianness", os.endianness);
console.log("当前进程的优先级是多少？os.getPriority([pid])", os.getPriority(1652));
console.log("返回当前用户的主目录上的字符串路径", os.homedir())
console.log("返回当前主机名", os.hostname())
console.log("操作系统名称", os.type(), os.uptime(), os.userInfo(),)