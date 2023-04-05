const express = require('express');

const port = 8001;

const app = express();

const path = require('path');

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rnwdevmansikakani:rnwMansikikani@cluster0.9j5egwl.mongodb.net/homeYC", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("db connected1");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'uploads')));
app.use(express.static(path.join(__dirname,'assets')));

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log("server is running:",port);
})