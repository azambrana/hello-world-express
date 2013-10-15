var express = require('express');
var app = express();
    app.listen(3000);

app.get('/', function(request, response) {
       response.send("Hello World");
});

console.log("Application started on localhost:3000");
