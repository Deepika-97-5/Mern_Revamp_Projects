//spread operator
// => unpack the group of elements into individual element
//used in both array and object

//var arr1 = [10,20,30,40,50];

//console.log(...arr1);

//copy 
//let arr2 = [0,...arr1];
//console.log(arr2);
//concatination
//console.log(...arr1,...arr2);
//console.log([...arr1,...arr2]);


//var obj1 = {
   // name: "Revamp",
   // age: 20,
    //years: 5,

//};

//var obj2 = {
  //  ...obj1,
    //sample: "copy",

//};

//console.log({...obj2}); //or
//console.log({...obj1,...obj2});



//Rest operator
//=>it pack the element into the group of element
//=>funtion parameter and destructuring
//=>return=>array of element


//function add(a,b,c,...d){
    //console.log(a,b,c,d[1]);
    //console.log(a,b,c,...d);
//}

//add(10,20,30,40,50);


//let str = "  Hello World  ";
//let str1 = str.trim(); //trimEnd();,trimStart();
//console.log(str.length);
// console.log(str1.length);

//console.log(str.toLowerCase());
//console.log(str.split(" ")); // return array of element
//console.log(str.concat("js"));
//console.log(str.toUpperCase());
//console.log("js".concat(str));
//console.log(str.indexOf("o"));
//console.log(str.indexOf("l"));
//console.log(str.lastIndexOf("l"));
//console.log(str.replace("World","Developer"));


//Array destructuring
//let arr =[1,2,3,4,5];
//let [a,b,...c] = arr;
//console.log(a,b,...c);

//Object destructuring
//const obj = {
  //name:"Deepika",
  //age:20,
  //email:"deepika@gmail.com",
  //pass:"Deepi123"
//};

//let {email,pass} = obj;
//console.log(email,pass);

//Array Method => return array
//Map Method
//var arr = [1,2,3,4,5,6,,8,9]

//var mapMethod = arr.map((e)=>{
//console.log(e);
  //return e;
//});

//console.log(mapMethod);

//filter method

//var filterMethod = arr.filter((e)=> e%2 == 0); //e%2!=0
//console.log(filterMethod);

//console.log(filterMethod);

//filterMethod.map((e))=>{
  //console.log(e);
//}


//reduce method

var arr = [1,2,3,4,5,6,,8,9]

var reduceMethod = arr.reduce((accumulator,currentvalue) =>{

  console.log(accumulator,currentvalue);
  return accumulator + currentvalue;

});

console.log(reduceMethod);


