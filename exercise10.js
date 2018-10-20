var net = require('net');

var server = net.createServer(function (socket){
    var d = new Date();
    var formattedDate = "\n";
    formattedDate = d.getFullYear() + "-" +
                    ("00" + (d.getMonth() + 1)).slice(-2) + "-" + 
                    ("00" + d.getDate()).slice(-2) + " " + 
                    ("00" + d.getHours()).slice(-2) + ":" + 
                    ("00" + d.getMinutes()).slice(-2) + "\n";                           
    socket.end(formattedDate);
});

server.listen(process.argv[2]);

/* official solution:
  var net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))*/