var http = require('http');
var port = Number(process.argv[2]);

var server = http.createServer(function(request, response){
    var map = require('through2-map');
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);