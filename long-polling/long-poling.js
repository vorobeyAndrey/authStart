var http = require('http')
var fs = require('fs')
var chat = require('./chat')


http.createServer(function(req, res) {
    switch (req.url) {
        case '/':
            sendFile(__dirname  + '/long-polling.html', res)
            break;
        case '/subscribe':
            chat.subscribe(req, res);
            break;
        case '/publish':
            var body = '';

            req.on('readable', function () {
                body += req.read();
                console.log(body)
            }).on('end', function () {
                try {
                    body = JSON.parse(body);

                } catch (e) {
                  res.statusCode = 400;
                    res.end("bad request");
                    return;
                }
                chat.publish(body.message);
                res.end('ok');
            })
            break;
        default:
            res.statusCode = 404
            res.end('not found')
    }
}).listen(8080)

function sendFile(fileName,res) {
  var filestream = fs.createReadStream(fileName);
    filestream.on('error', function() {
        res.statusCode = 500;
        res.end('server error')
    });
    filestream.pipe(res);
};