var path = require('path');
var fs = require('fs');

module.exports = function(pathname, extname, cb){
    extname = `.${extname}`;
    const filteredList = [];

    fs.readdir(pathname, function (err, data) {
        if (err) return cb(err, null);

        for (let i = 0; i < data.length; i++) {
            if (path.extname(data[i]) === extname) {
                filteredList.push(data[i]);
            }
        }
        return cb(null, filteredList);
    });
};