
var express = require('express');

var app = express();

var path = require('path');
var port = 8000;

app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/img', express.static(__dirname + '/public/img'));
app.use('/public/html', express.static(__dirname + '/public/html'));
app.use('/public',express.static(__dirname + '/public'));

app.get('/public/html', function(req,res){
    res.sendFile(path.join(__dirname + '/public/html/customer-list.html'));
}


);

app.listen(port);
