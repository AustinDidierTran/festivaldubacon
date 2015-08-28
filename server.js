var express = require('express'),
    path = require('path'),
    rootPath = path.normalize(__dirname);

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

require('./server/config/parse')(config);

app.listen(config.port);