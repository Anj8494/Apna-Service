import express from 'express';
var app= express();

var server = app.listen(3000,function()
{
    var port = server.address().port
    console.log("hii,node server is listning to http://localhost:%s", port)
})