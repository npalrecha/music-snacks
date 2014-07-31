var settings = {
    mongodb: {
        url: 'mongodb://localhost:27017/snax',
        settings: {
            db: {
                native_parser: false
            }
        }
    },

    rdio: {
        rdio_api_key:    'INSERT KEY HERE',
        rdio_api_shared: 'INSERT SHARED KEY HERE'
    }
};

module.exports = settings;
