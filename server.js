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

app.get('/get-event-choices/:guid', function(req, res) {
    console.log('getting choices for event guid', req.params.guid);
    var guid = req.params.guid;
    var event = getEventByGuid(guid);
    
    res.json(event.choices);
});

app.post('/save-event', function(req, res) {
	var newEvent = req.body;
	newEvent.guid = generateGuid();
	newEvent.choices = [];
	console.log('new event guid is', newEvent.guid);
	gameEvents.push(newEvent);
	writeEventsJson();
	
	res.json(newEvent);
});

app.post('/event/:eventGuid/save-choice', function(req, res) {
    console.log('saving choice for event guid', req.params.eventGuid);
    var eventGuid = req.params.eventGuid;
    var event = getEventByGuid(eventGuid);
    var choice = req.body;
    choice.results = [];
    choice.guid = generateGuid();
    
    event.choices.push(choice);
    res.json(choice);
});

app.post('/save-events', function(req, res) {
	var eventsArray = req.body;
	console.log('received events', eventsArray);
	gameEvents = eventsArray;
	writeEventsJson();
	
	res.end(JSON.stringify(gameEvents));
});

app.use(express.static('./'));
app.use("/events", express.static('./'));
app.use("/equipment", express.static('./'));
app.use("/event/*/choices", express.static('./'));

server.listen(3000, function(){});

function getEventByGuid(guid) {
    var matchingEvent;
        
    gameEvents.forEach(event =>{
        if(event.guid === guid) {
            matchingEvent = event;
        }
    });
    
    console.log('matching event', matchingEvent);
    return matchingEvent;
}

function writeEventsJson() {
	fs.writeFile('data/gameEvents.json', JSON.stringify(gameEvents), err => {
		if(err) throw err;
		console.log('events saved');
	});
}

function generateGuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
	    return v.toString(16);
	});
}
