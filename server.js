var express = require('express');
var app = express();
var server = require('http').Server(app);
var fs = require('fs');
var jsonStr = JSON.stringify(fs.readFileSync('data/equipment.json', 'utf8'));
var equipment = JSON.parse(jsonStr);

app.get('/equipment', function(req, res) {
	console.log('Sending Equipment', equipment);
	res.send(equipment);
});

app.get('/events', function(req, res) {
	const events = JSON.parse(JSON.stringify(fs.readFileSync('data/gameEvents.json', 'utf8')));
	console.log('Sending Events', events);
	res.send(events);
});

app.use(express.static('./'));

server.listen(3000, function(){});
