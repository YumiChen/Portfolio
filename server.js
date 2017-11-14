var express = require('express');
var BodyParser = require( 'body-parser' );
var router = require('./routes.js');

// App setup
var app = express(),
    port =process.env.port || 5000;
var server = app.listen(port, function(){
    console.log('listening for requests on port ' + port);
});

// Static files
app.use(express.static('public'));


app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json() );

app.use("/",router);