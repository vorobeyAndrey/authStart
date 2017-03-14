var clients = []

exports.subscribe = function(req, res) {
    console.log('subscribe')
    clients.push(res)
};

exports.publish = function(message) {
    console.log('publish ', message)
    clients.forEach(function(res) {
        res.end(message)
    })
    clients = [];
};