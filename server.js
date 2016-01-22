var express = require('express');
var app = express();
var server = require('http').Server(app);
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonStr = JSON.stringify(fs.readFileSync('data/equipment.json', 'utf8'));
var equipment = JSON.parse(jsonStr);
var gameEvents = JSON.parse(fs.readFileSync('data/gameEvents.json', 'utf8'));

app.use(bodyParser.json());

app.get('/equipment', function(req, res) {
	console.log('Sending Equipment', equipment);
	res.send(equipment);
});

app.get('/events', function(req, res) {
	console.log('Sending Events', gameEvents);
	res.send(gameEvents);
});

app.post('/save-events', function(req, res) {
	var eventsArray = req.body;
	console.log('received events', eventsArray);
	gameEvents = eventsArray;
	fs.writeFile('data/gameEvents.json', JSON.stringify(gameEvents), err => {
		if(err) throw err;
		console.log('events saved');
	});
	res.end(JSON.stringify(gameEvents));
});

app.use(express.static('./'));

server.listen(3000, function(){});
