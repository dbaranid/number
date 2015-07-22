var http = require('http');
http.get("http://nodejs.org/api/http.json", function(res) {
  console.log("Got response: " + res);
  
  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	});
	
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});