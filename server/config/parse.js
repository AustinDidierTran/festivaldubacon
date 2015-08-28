var Parse = require('parse').Parse;

module.exports = function(config){
    
    Parse.initialize(config.parseKeys[0], config.parseKeys[1]);
    
}