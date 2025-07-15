//setInterval(() =>{
   // console.log("Revamp");
//},1000);


var count = 0;
var setI = setInterval(()=>{
   count = count+1
    console.log(count);
},1000);


setTimeout(()=>{
    clearInterval(setI)
},5000);