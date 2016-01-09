var liveServer = require("live-server");
var express = require('express');
var app = express();
var server = require('http').Server(app);
var fs = require('fs');
var jsonStr = JSON.stringify(fs.readFileSync('equipment.json', 'utf8'));
var equipment = JSON.parse(jsonStr);

var params = {
    port: 8080,
    host: "127.0.0.1",
    open: true,
    file: "index.html",
    wait: 1000
};

app.get('/equipment', function(req, res) {
	console.log('Sending Equipment', equipment);
	res.send(equipment);
});

server.listen(3000, function(){});
liveServer.start(params);
