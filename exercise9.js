var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            results[index] = data.toString()
            count++

            if (count === 3) {
                printResults()
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}

// Below is my first solution, not ideal, but it works.

/*
var http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
let dataString = "";
let dataString2 = "";
let dataString3 = "";

http.get(url1, function (response) {
    response.setEncoding(`utf8`);
    response.on('data', addData);
    response.on('end', get2)
    response.on('error', console.error);
}).on('error', function (err) {
    console.log("Got error: " + err.message);
});

const addData = function(data) {
    dataString = `${dataString}${data}`;
}

const addData2 = function(data) {
    dataString2 = `${dataString2}${data}`;
}

const addData3 = function(data) {
    dataString3 = `${dataString3}${data}`;
}

const renderResults = function() {
    console.log(dataString);
    console.log(dataString2);
    console.log(dataString3);
}

const get2 = function(){
    http.get(url2, function (response) {
        response.setEncoding(`utf8`);
        response.on('data', addData2);
        response.on('end', get3)
        response.on('error', console.error);
    }).on('error', function (err) {
        console.log("Got error: " + err.message);
    });
}

const get3 = function(){
    http.get(url3, function (response) {
        response.setEncoding(`utf8`);
        response.on('data', addData3);
        response.on('end', renderResults)
        response.on('error', console.error);
    }).on('error', function (err) {
        console.log("Got error: " + err.message);
    });
} */