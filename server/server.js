/**
 * Created by Mano on 20/06/15.
 */
// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var path = require('path');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


app.use(express.static('./app'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(morgan('combined'));

app.set('port', 3000);

app.use(express.static('./app'));

app.use('/bower_components', express.static('./bower_components'));
//app.use(express.static(__dirname + '/app/libs'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.sendFile('./app/index.html');
});

app.get('/test', function (req, res) {
    res.send('hello world test');
});

app.get('/equipiers', function (req, res) {
    var retVal = {
        id: 1,
        firstname: 'Manuel',
        lastname: 'Dupont'
    };
    res.send(retVal);
});

var server = app.listen(app.get('port'), function () {
    console.log('Listening on port %d', server.address().port);
    console.log("========LISTENING On Port 3000=========")
});

module.exports = app;

