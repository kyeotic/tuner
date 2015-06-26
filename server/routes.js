
var fs  = require('fs');

export default (app) => {
	app.get('/api2/*', (req, res) => {
	    res.sendFile(clientDir + '/index.html');
	});
}