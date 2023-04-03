const express = require('express');

const port = 8001;

const app = express();

app.get("/", function(req,res){
    console.log("<h1>HI</h1>");
})

app.listen(port, function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log("server is running:",port);
})