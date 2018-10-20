var path = require('path');
var fs = require('fs');
let pathname = process.argv[2];
const extname = `.${process.argv[3]}`;
pathname = path.normalize(pathname);

fs.readdir(pathname, function(err, data){
    for (let i = 0; i < data.length; i++){
        if (path.extname(data[i]) === extname){
            console.log(data[i]);
        }
    }
});