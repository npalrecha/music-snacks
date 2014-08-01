var Hapi = require('hapi');
var dbOpts = {
    "url": "mongodb://localhost:27017/snax",
    "settings": {
        "db": {
            "native_parser": false
        }
    }
};

var hapiOpts = {
    "views": {
        "engines": {
            "jade": require("jade")
        },
        "path": "./public"
    }
};

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000, hapiOpts);

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
// file upload
server.route({
    method: 'POST',
    path: '/upload',
    config: {
        payload:{
            maxBytes: 1048576*2, // 1048576 is 1MB
            parse: true,
            output: 'stream'
        },
        handler: function(request, resp) {
            var fs = require('fs');
            var itunes = require('./src/backends/itunes');
            var playlist_name = request.payload.playlist.hapi.filename;
            var playlist_data = request.payload.playlist.read();
            itunes.parse_playlist(playlist_name, playlist_data);
            resp('GVT playlist_name, playlist_data:' + playlist_name + playlist_data);
        }
    },
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        return reply.view("index", {
        });
    }
});

server.route({
    method: 'GET',
    path: '/snax/{id}',
    handler: function(request, reply) {
        return reply.view("build_playlist", {
            id: request.query.id
        });
    }
});

// Start the server
server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});

