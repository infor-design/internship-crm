var express = require('express');
var path = require('path');

var app = express();
var port = 8000;

app.listen(port);
console.log(`Server started at http://localhost:${port}`);

// =================================================
// Static Assets
// =================================================
app.use('/', express.static(path.resolve(__dirname, 'public')));

// =================================================
// Dynamic (Compiled) Assets
// =================================================
// project-level `/dist` folder (generated by build)
app.use(express.static(path.resolve(__dirname, 'dist'), {
  etag: false
}));

// =================================================
// Routes
// =================================================
// This route contains all of our REST endpoints
app.use('/api', require(path.resolve('app/src/api-routes.js')));

// Customer Detail Page
app.get('/detail', function(req,res) {
  res.sendFile(path.resolve(__dirname, 'app', 'views', 'detail.html'));
});

// This is the original page we worked on
app.get('/index', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'app', 'views', 'index.html'));
});

// Sign-in / Error?
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'app', 'views', 'signin.html'));
});
