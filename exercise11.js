var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var filepath = process.argv[3];

var server = http.createServer(function(request, response){
    const stream = fs.createReadStream(filepath);
    stream.pipe(response);
});

server.listen(port);
