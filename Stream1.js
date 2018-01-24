// this code is the long hand way as taught by Senthil
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {

      response.writeHead(200);

      request.on('readable', function() {
          var chunk = null;//initialize to null.
          response.writeHead(200);
          while (1==1) {
              chunk = request.read();//after reading the request assign it to chunk
              if (chunk == null) {// to break the loop
                  break;
              }
              else {
                console.log(chunk.toString());//to String to handle buffer in request
                response.write("chunk");
              }    
          }
       });

      request.on('end', function() {
         response.end();
    });
});

server.listen(8080);//server.listen is a function which emits the request event




