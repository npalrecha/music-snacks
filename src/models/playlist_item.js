var playlist_item = function(args) {
    args = args || {};
    args.track_ids = args.track_ids || {};

    var self = {
        artist: args.artist || '',
        title: args.title || '',
        track_ids: {
            beats: args.track_ids.beats,
            spotify: args.track_ids.spotify,
            rdio: args.track_ids.rdio,
            itunes: args.track_ids.itunes
        },
        duration: args.duration
    };

    return self;
};

module.exports = playlist_item;

