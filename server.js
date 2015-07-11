var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('*', function(req, res){
    res.render('index');
})

//port equals environment port or 80 if null
var port = process.env.PORT || 80;

app.listen(port);