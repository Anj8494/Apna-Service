var express = require('express')
const bodyParser = require('body-parser');
const passport = require('passport');
var app = express();
const router = express.Router();


app.use(bodyParser.json());
 var server = app.listen(8081,function()
{
    var port = server.address().port
    console.log("hello, node server is listing to http://localhost:%s",port)
})



app.post("/login",passport.authenticate("local"), async(request,response)=>{
    let {email, password} = request.body;
    console.log("body:" , request.body)
    console.log("email:", request.body.email)
    console.log("password:", request.body.password)
    if(email=== request.body.email && password===request.body.password)
    {
        response.json({
            statusbar:"200",
            message: "login successfully"
        })
    }
    else
    {
        response.json({
            statusbar: "404",
            message:"email and password is doen't match"
        })
    }
})