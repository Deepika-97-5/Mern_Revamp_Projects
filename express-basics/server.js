const express = require("express");


//Create a instance of http Server
const app = express();


//API 1 : GET : localhost:3000/-->Home API Response
app.get("/",(req,res)=>{
    //1.Data from Frontend

    //2. Db Logic

    //3.Data to Frontend

    res.send("Home API Response")

})


//API 1 : GET : localhost:3000/car ---> Car API Response (response will come)
app.get("/car",(req,res)=>{
    //1.Data from Frontend

    //2. Db Logic

    //3.Data to Frontend

    res.send("Car API Response")

})


app.get("/bike",(req,res)=>{
    res.send("Hello Bike")
})

app.listen(4000);