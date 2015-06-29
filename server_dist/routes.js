'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var fs = require('fs');

exports['default'] = function (app) {
	app.get('/api2/*', function (req, res) {
		res.sendFile(clientDir + '/index.html');
	});
};

module.exports = exports['default'];