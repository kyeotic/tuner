var fs = require('fs'),
    port = process.env.PORT || 9000,
    clientDir = __dirname + '/dist/',
    jspmConfig = __dirname + '/system.config.js',
    jspmDir = __dirname + "/jspm_packages/",
    express = require('express'),
    app = express();

//Configure
app.use('/jspm_packages', express.static(jspmDir));
app.use(express.static(clientDir));

app.get('/system.config.js', function(req, res) {
	res.sendFile(jspmConfig);
});

//Api
require('./server_dist/routes')(app);

//Index Route
app.get('/*', function(req, res){
    res.sendFile(clientDir + '/index.html');
});

//Start Listening
app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);
