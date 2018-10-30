const express = require( 'express' ) ;
const nunjucks = require( 'nunjucks' ) ;
const app = express() ;
let noCaching = true;
const config = require('./config/config');

// for serving static file such as css and imgs
app.use('/static-files', express.static('static'));

// use nunjucks as the template engine
nunjucks.configure('views', {
    express: app,
    autoescape: true,
    noCache: noCaching
});


// setup some routes
app.get( '/', function( req, res ) {
    return res.render( 'index.njk' , config.njk.templateVars ) ;
} ) ;

app.get( '/:page', function( req, res ) {
  let filename = req.params.page.replace(".html", "");
  return res.render( filename + '.njk' ) ;
} ) ;


app.get( '/advice-and-appointments.html', function( req, res ) {
    return res.render( 'advice-and-appointments.njk' ) ;
} ) ;

let date = require('date-and-time');

// setup port and listen
app.listen( 3000 ) ;
