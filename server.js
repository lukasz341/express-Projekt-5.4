var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
}
);

var server = app.listen(8000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});