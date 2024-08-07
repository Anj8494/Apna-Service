var express = require('express')
var app = express();
 var server = app.listen(8081,function()
{
    var port = server.address().port
    console.log("hello, node server is listing to http://localhost:%s",port)
})