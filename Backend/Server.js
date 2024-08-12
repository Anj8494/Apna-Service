const express = require("express");
const cors = require("cors");
const db= require('./db/config');
const User = require("./db/User");
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json())
app.use(cors())

db()


// app.get('/testing',function(request, response)
// {
//     response.json(
//         {
//             status :"Success",
//             data : "Your request has been submited"
//         })
// })




app.post("/login", async(req,res)=>{
    console.log("body",req.body)
    console.log("email:",req.body.email)
    console.log("password:", req.body.password)
    if(req.body.password && req.body.email ){
        let user= await User.findOne({email: req.body.email});
        if(user)
        {
            const match = await bcrypt.compare(req.body.password, user.password);
            res.send(user)
        }
        else
        {
            res.send({result:"nouser found"})
        }
    }
    else
    {
        res.send({result:"nouser found"})
    }
   
})






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