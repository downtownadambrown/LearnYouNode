var http = require('http');
const url = process.argv[2];
let dataString = "";

http.get(url, function (response) {
    response.setEncoding(`utf8`);
    response.on('data', addData);
    response.on('end', renderResults)
    response.on('error', console.error);
}).on('error', function (err) {
    console.log("Got error: " + err.message);
});

const addData = function(data) {
    dataString = `${dataString}${data}`;
}

const renderResults = function() {
    console.log(dataString.length);
    console.log(dataString);
}