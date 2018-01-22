var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {

      response.writeHead(200);

      request.on('readable', function() {
          var chunk = null;
          response.writeHead(200);
          while (1==1) {
              chunk = request.read();
              if (chunk == null) {
                  break;
              }
              else {
                console.log(chunk.toString());
                response.write("chunk");
              }    
          }
       });

      request.on('end', function() {
         response.end();
    });
});

server.listen(8080);//server.listen is a 
