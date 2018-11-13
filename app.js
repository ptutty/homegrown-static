const express = require( 'express' ) ;
const nunjucks = require( 'nunjucks' ) ;
const app = express() ;
const config = require('./config/config');
const pages = require('./app/routes/pages')

let noCaching = true;

// for serving static file such as css and imgs
app.use('/static-files', express.static('static'));


// use nunjucks as the template engine
nunjucks.configure(['pages', 'templates' ], {
    express: app,
    autoescape: true,
    noCache: noCaching
});


// setup some routes

// the homepage route passes a date stamp and version number
app.get( '/', function( req, res ) {
    return res.render( 'index.njk' , config.njk.templateVars ) ;
} );

// all other routes abstracted to app/routes folder
app.use('/:page', pages());


let date = require('date-and-time');

// setup port and listen
app.listen( 3000 ) ;
