const {PrismaClient} = require("@prisma/client");
const express = require("express");
const app = express();
app.use(express.json()) //md-1
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
var jwt = require('jsonwebtoken');
var morgan = require('morgan')

const middleware1 = (req,res,next) =>{
    console.log("middleware1")
    next()
}

const middleware2 = (req,res,next) =>{
    console.log("middleware2")
    next()
}

app.use(morgan('dev'));
app.use(middleware1) //md-2
app.use(middleware2) //md-3

const authMiddleware = (req, res, next) => {
  try {
    // Expecting token in header like: Authorization: Bearer <token>
    const authHeader = req.headers['authorization']
    console.log(authHeader)

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // remove "Bearer"
    const decoded = jwt.verify(token, "hh-room-temp");

    req.user = decoded; // store user info if needed
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

app.get("/",(req,res)=>{
    res.send("Auth APIs Working");
});

//API 1 : POST - /Register
app.post("/register",async (req,res,next)=>{

    try{
    //1. Data from Frontend
    const data = req.body

    const hashedpassword = await bcrypt.hash(data.password, 10);

    console.log(data)



    //DB Logic

    const newUser = await prisma.user.create({
        data: {
            email_id: data.email_id,
            password: hashedpassword,
            name: data.name,
            phone_number: data.phone_number,
        },
    });


    // Data to Frontend
    res.status(200).json({message:"Created a New User",data:newUser});
} catch (err) {
    console.log(err);
}
})

//API 2 : POST - /login
app.post("/login",async(req,res,next)=>{
    try{
    // 1. Data from Frontend
        const data = req.body; //Email.Password

    // 2. DB Logic
    const isEmailExist = await prisma.user.findUnique({
        where:{
        email_id: data.email_id
        },
    }) ; 

    if (isEmailExist===null){
        res.status(404).json({message: "Email Not Existed"});
    }else{
       
      const user =  await bcrypt.compare(data.password, isEmailExist.password);

      if(user){
        const temp_key = jwt.sign({ user_id:isEmailExist.user_id }, 'hh-room-temp',{ expiresIn: '1h' });
        const main_key = jwt.sign({ user_id:isEmailExist.user_id }, 'hh-room-main',{ expiresIn: '2d' });

        res.status(200).json({message: "Login Successfull",data:{...isEmailExist,temp_key,main_key}});
      }else{
        res.status(404).json({message:"Password Not Correct"});
      }

      
    }
    

// 3. Data to Frontend
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error",err:err })

        
    }
})

app.get("/user",(req,res,next)=>{
    res.send("This is a Private API")
    next()
})


//app.get("/products",middleware1,middleware2,(req,res)=>{
app.get("/products",authMiddleware,(req,res,next)=>{
    res.send("This is a Public API")
    next()
})

app.listen(3005);
