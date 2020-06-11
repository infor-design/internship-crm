
var express = require('express');

var app = express();

var path = require('path');
var port = 8000;

app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/customer-list.html'));
}


);

app.listen(port);
