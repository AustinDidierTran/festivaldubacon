var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')
module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3030,
        parseKeys: ["saCIOQOc7pYEXUDXvAcXOX7a3Q6tkQ91RLwHD5IE", "aiYjoj8UBjng9Ec02IovtoIA75tZljBrdSJugLtR"]
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80,
        parseKeys: ["saCIOQOc7pYEXUDXvAcXOX7a3Q6tkQ91RLwHD5IE", "aiYjoj8UBjng9Ec02IovtoIA75tZljBrdSJugLtR"]
    }
};