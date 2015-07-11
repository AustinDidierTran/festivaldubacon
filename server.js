var express = require('express'),
    path = require('path'),
    rootPath = path.normalize(__dirname),
    app = express();

//Sets the view engine from HTML to Jade. To learn how to use jade, see http://jade-lang.com/tutorial/
app.set('view engine', 'jade');

//Sets the rootPath to public for imports
app.use(express.static(rootPath + '/public'));

app.get('/partials/*', function(req, res) {
    console.log('Rendering partial...');
    res.render(__dirname + '/public/views/partials/' + req.params[0]);
});

app.get('*', function(req, res){
    res.render('index');
})

//port equals environment port or 80 if null
var port = process.env.PORT || 80;

app.listen(port);