
var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function(req, res) {
  res.send('Hello world from  -> ' + hostname + '!     Hello App in ICP!!\n')
})
app.listen(8080, function() {//previously 8080
  console.log('Sample app is listening on port 8080.')
})
