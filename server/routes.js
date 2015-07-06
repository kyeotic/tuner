
var fs  = require('fs');
var url = require('url');
var querystring = require('querystring');
var pretty = require('json-stringify-safe');
var request = require('request');

var echonestUrl = 'http://developer.echonest.com/api/v4/';
var echonestKey = process.env.echonest || require('./../env.json').echonestKey;

//console.log(echonestKey)

/*
	req.url
	req.method
	req.query
*/


var songProfileBuckets = [
	'audio_summary',
	'artist_discovery',
	'artist_discovery_rank',
	'artist_familiarity',
	'artist_familiarity_rank',
	'artist_hotttnesss',
	'artist_hotttnesss_rank',
	'song_currency',
	'song_currency_rank',
	'song_hotttnesss',
	'song_hotttnesss_rank',
	'song_type'
];

export default (app) => {
	app.get('/api/*', (req, res) => {
		var props = { url: req.url, method: req.method, query: req.query, path: req.params['0']};

		var query = querystring.stringify({
			'api_key': echonestKey,
			'format': 'json',
			'track_id': 'spotify:track:' + props.query.track
		});

		query += songProfileBuckets.reduce(function(prev, current) {
			return prev + '&bucket=' + current;
		}, '')

		var queryUrl = url.resolve(echonestUrl, 'song/profile') + '?' + query;
		//console.log(queryUrl);

		request(queryUrl, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	var info = JSON.parse(body);
		  	var rate = { total: response.headers['x-ratelimit-limit'], remaining: response.headers['x-ratelimit-remaining']};


		    res.json({result: info, rate: rate});
		  } else {
		  	res.status(response.statusCode).send({error: error, content: body});
		  }
		});
	});
}