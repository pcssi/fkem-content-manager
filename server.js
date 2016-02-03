var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var fs = require('fs');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var jsonStr = JSON.stringify(fs.readFileSync('data/equipment.json', 'utf8'));
var equipment = JSON.parse(jsonStr);
var gameEvents = JSON.parse(fs.readFileSync('data/gameEvents.json', 'utf8'));

app.use(bodyParser.json());

app.get('/get-equipment', function(req, res) {
	console.log('Sending Equipment', equipment);
	res.send(equipment);
});

app.get('/get-events', function(req, res) {
	console.log('Sending Events', gameEvents);
	res.send(gameEvents);
});

app.post('/save-event', function(req, res) {
	var newEvent = req.body;
	newEvent.guid = generateGuid();
	console.log('new event guid is', newEvent.guid);
	gameEvents.push(newEvent);
	
	res.end(http.STATUS_CODES[200], newEvent);
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
app.use("/events", express.static('./'));
app.use("/equipment", express.static('./'));

server.listen(3000, function(){});

function generateGuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
	    return v.toString(16);
	});
}
