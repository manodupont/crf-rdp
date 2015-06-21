/**
 * Created by Mano on 20/06/15.
 */
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

//module.exports = app;

