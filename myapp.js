const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const route =require('./routes/route');

mongoose.connect("mongodb://localhost:27017/mybase", { useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017')
}); 
mongoose.connection.on('error',(err)=>{
    if(err){  
    console.log('error to database Connection'+err);
    }
});

const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api',route);
app.listen(port, () => console.log('API running on localhost:'+port));