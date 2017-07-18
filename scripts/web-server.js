// we need to bring the express the library 
// require the express library 

var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');


app.use(express.static(rootPath + '/app')); 
app.listen(8001); 
console.log('Listening on port 8001.....');