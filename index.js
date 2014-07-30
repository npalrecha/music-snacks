var Hapi = require('hapi');
var dbOpts = {
    "url": "mongodb://localhost:27017/snax",
    "settings": {
        "db": {
            "native_parser": false
        }
    }
};


// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);

server.pack.register({
    plugin: require('hapi-mongodb'),
    options: dbOpts
}, function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

// public directory
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

// Start the server
server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});

