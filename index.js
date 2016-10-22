var express = require('express')

var app = express();

var http = require('http')
http = http.Server(app)

app.get('/', function(req, res){
  res.send("Hello ITP")
});

//routes are like html addresses, they are increasingly specific params
// when we say app.get / we are entering the first level of domain heirarchy
// req reaches out from the browser to the server.
// the res sends a response from the server to the browser.

// if you deploy to heroku do you need to change this server line?

app.get('/about', function(req,res){
  res.send("About ITP")
})

var server = http.listen(3000, function(){
  console.log("I am listening on port 3000")
});
