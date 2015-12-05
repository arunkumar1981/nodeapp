// var http = require("http");
//
// http.createServer(function(req, res) {
//   res.writeHead(200,{'contentType:':'text/plain'});
//   res.end('Hello');
// }).listen(1337,'127.0.0.1');
// console.log('web server has started');

var http = require("http");
var fs=require("fs");

http.createServer(function(req,res){

    fs.readFile('index.html',function(err, data) {
      res.writeHead(200,{'contentType':'text/html'});
      res.end(data);
    });

}).listen(1337, '127.0.0.1');
console.log('web server has started');
