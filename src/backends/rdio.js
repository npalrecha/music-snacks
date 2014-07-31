var rdio = require('rdio')(settings.rdio);

module.exports = (function() {
    var self = {};

    self.getPlaylist = function getPlaylist(id, cb) {
        // TODO: implement
    };

    self.getTrack = function getTrack(args, cb) {
        // TODO: implement
        rdio.api(null, null, {
            method: 'search',
            query: args.artist + ' ' + args.title,
            types: 'Track',
            count: 1
        }, function(err, result) {
            if(err) { return cb(err); }
            result = JSON.parse(result).result;
            if(result && result.results.length > 0) {
                return cb(null, {id: result.results[0].key});
            } else {
                cb(null, null);
            }
        });
    };

    return self;
}());
