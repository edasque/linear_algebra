'use strict'

let Vector = require("./vector.js")

let vector_a = new Vector([1,-2,3.3])
let vector_b = new Vector([2,3,4])

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(vector_a.dotProduct(vector_b).toString());
}).listen(3000,"0.0.0.0");

console.log("Listening on http://0.0.0.0:3000")