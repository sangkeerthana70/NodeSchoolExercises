var http = require('http');
var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  request.on('readable', function() {
    var chunk = null;
    while(null !== (chunk = request.read())) {
	    response.write(chunk);
    }
    });
request.on('end', function() {
    response.end();
});
})
server.listen(process.env.PORT);//server.listen
