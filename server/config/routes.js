module.exports = function(app){
    app.get('/partials/*', function(req, res) {
        res.render(__dirname + '/../../public/views/partials/' + req.params[0]);
    });
    
    app.get('*', function(req, res){
        res.render('index');
    });
}