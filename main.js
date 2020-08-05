const express = require('express');
const path = require('path');

const app = express();
const port = 8000;
const fetch = require("node-fetch");

app.listen(port);
console.log(`Server started at http://localhost:${port}`);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/views'));

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
app.use('/api', require(path.resolve('app/src/js/api-routes.js')));

// Endpoints
const customersEndpoint = `http://localhost:${port}/api/customers`

// Test EJS page
app.get('/test-ejs', async (req, res) => {
  try {
    const api_res = await fetch(customersEndpoint);
    const data = await api_res.json();
    res.render('pages/index', {
      title: 'Detail',
      data: data
    });
  } catch(e) {
    console.error(e);
  }
});

// Customer Detail Page
app.get('/detail', function(req,res) {
  res.sendFile(path.resolve(__dirname, 'app', 'views', 'detail.html'));
});

// This is the original page we worked on
app.get('/index', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'app', 'views', 'index.html'));
});

// Error Page (Temporary)
app.get('/error', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'app', 'views', '404.html'));
});

// Sign-in / Error?
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'app', 'views', 'signin.html'));
});
