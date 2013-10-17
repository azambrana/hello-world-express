var express = require('express');
var app = express();
    app.listen(3000);

app.configure(function(){
    app.use(express.bodyParser());
});

var routes = require('./routes');
var data = require('./routes/data');

app.get('/api/data', data.mockup);
app.get('/index.html', routes.index);

console.log("Application started on localhost:3000");
