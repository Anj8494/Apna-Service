const express = require("express");
const cors = require("cors");
const db= require('./db/config');
const User = require("./db/User");
const bcrypt = require('bcryptjs');
const { json } = require("body-parser");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(
 bodyParser.urlencoded({
   extended: true,
 }),
);

db()


app.post("/login",(request,response)=>{
    let {email,password} = request.body
    console.log("email",request.body.email)
    console.log("password",request.body.password)
    if(email === request.body.email && password === request.body.password)
    {
        response.json({
            status:200,
            message:"login sucessfuly"
        })
    }
    else{
        response.json({
            status:404,
            message:"email and password is dosen't match" 
        })
    }
})


// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     // Logic to check credentials
//     if (isValidUser(email, password)) {
//         res.json({ success: true, message: "Login successful" });
//     } else {
//         res.status(401).json({ success: false, message: "Invalid credentials" });
//     }
// });

















// app.get('/testing',function(request, response)
// {
//     response.json(
//         {
//             status :"Success",
//             data : "Your request has been submited"
//         })
// })




// app.post("/login", async(req,res)=>{
//     const {email,password} =req.body;
//   if(!email || !password)
//    {
//     return res.status(400)
//             .json({error: "Email and password are required"})
//    }
//    try{
//     const user = await User.findOne({email})
//     if(!user)
//     {
//         return res.status(404)
//                 .json({error:"User not found"})
//     }
//     const isPasswordVaild =await bcrypt.compare(password, user.password);
//     if(!isPasswordVaild)
//     {
//         return res.status(401)
//             .json({error:"Invaild credentials"})
//     }
//     const sanitizedUser = {
//         _id: user._id,
//         email: user.email,
//    }
//    res.status(200).json({message: "Login successful", user:sanitizedUser})
//    }
//    catch  (error){
//     console.error("Login error:", error);
//     res.status(500).json({ error: "Internal server error" });
//    }

// })






// app.get("/",(req,res)=>{
//     res.send("app is working....")
// });


app.listen(3000, function(){
    console.log("hello, node server is lising to http://localhost:3000")
})
// var server = app.listen(3000,function(){
//     var port = server.address().port
//     console.log("hello , node server is listing to http://localhost:%s", port)
// })