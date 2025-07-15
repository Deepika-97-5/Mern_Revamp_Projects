//console.log("step 1");
//console.log("step 2");

//setTimeout(()=>{
//console.log("step 3");
//},1000);

//console.log(fetch("https://dummyjson.com/"));

//fetch("https://dummyjson.com/products").then((res)=>{
   // return res.json();
//}).then((data) => {
   // console.log(data.products);

//}).catch((error)=>{
   // console.log(`Internal server error ${error}`);
//});

async function fetchData(){
    try{
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
}catch(error){
    console.log(`fetch error $(erroe)`);
}
}

fetchData();