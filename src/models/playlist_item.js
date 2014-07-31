var playlist_item = function(args) {
    args = args || {};

    var self = {
        artist: args.artist || '',
        title: args.title || '',
        duration: args.duration
    };

    return self;
};

module.exports = playlist_item;

