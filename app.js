const http = require('http');

http.createServer (function(req, res){
	res.write('There is a brand new application coming here very soon.......');
	res.end();
}).listen(3000);

console.log('Server started on port 3000');



