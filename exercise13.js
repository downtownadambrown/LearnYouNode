var http = require('http');
var url = require('url'); 
const port = Number(process.argv[2]);

http.createServer(function (req, res) {
    var urlObject = url.parse(req.url, true),
        pathname = urlObject.pathname,
        startTime = urlObject.query.iso,
        result;

    if (pathname === '/api/unixtime') {
        result = getUnixTimeStamp(startTime);
    }
    else if (pathname === '/api/parsetime') {
        result = getTimeObj(startTime);
    }
    // Detects if result exists
    if (result) {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(result));
    }
    
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(port)

function getTimeObj(startTime) {
    var date = new Date(getTimeStamp(startTime));
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function getTimeStamp(startTime) {
    return Date.parse(startTime);
}

function getUnixTimeStamp(startTime) {
    return {
        unixtime: getTimeStamp(startTime)
    };
}

/* var server = http.createServer(function(request, response){
    const urlMeta = url.parse(request.url, true);
    let iso = urlMeta.query.iso;
    const date = new Date(iso);
    let outputJSON = "";

    switch(urlMeta.pathname){
        case '/api/parsetime':    
            outputJSON = JSON.stringify({"hour" : date.getHours(),
                                       "minute" : date.getMinutes(),
                                       "second" : date.getSeconds()});
            response.writeHead(200, { 'Content-type': 'application/json' });
            response.end(JSON.stringify(outputJSON));
            break;
        case '/api/unixtime':
            outputJSON = JSON.stringify({"unixtime" : date.parse(iso)});
            response.writeHead(200, { 'Content-type': 'application/json' });
            response.end(JSON.stringify(outputJSON));
            break;
    }
});

server.listen(port);  */