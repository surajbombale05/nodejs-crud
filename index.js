const express = require('express');
const Route = require('./routes/_route');

const app = express();

app.get('/' , (req , res)=>{
    res.send('application is running.');
});

app.use('/',Route);

app.listen(3000 , ()=>{
    console.log("Server is started.");
});