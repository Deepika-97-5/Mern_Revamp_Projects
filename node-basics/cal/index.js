

const {add,sub,mul,div} = require("backend-cal-deepika");

const os = require('node:os');

console.log(os.arch())
console.log(os.cpus())


console.log(add(5,5));
console.log(sub(10,5))
console.log(mul(5,5));
console.log(div(10,5))
