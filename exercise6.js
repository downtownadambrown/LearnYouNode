var mymodule = require('./mymodule.js');

const callback = function(err, filteredlist){
    if (err) console.log(err);
    filteredlist.forEach(function(element){
        console.log(element);
    });
}

mymodule(process.argv[2], process.argv[3], callback);