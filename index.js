var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            if (request.method === 'GET' && request.url === '/') {
                fs.readFile('./index.html', 'utf-8', function(err, data) {
                    if (err) throw err;
                    response.write(data)
                    response.end();
                })
            } else {
                response.setHeader("Content-Type", "text/html; charset=utf-8");
                response.statusCode = 404;
                fs.readFile('./404.html', 'utf-8', function(err, data) {
                    if (err) throw err;
                    response.write(data)
                    response.end();
                })
            };
          });

            server.listen(8080);
