const express = require( 'express' ) ;
const nunjucks = require( 'nunjucks' ) ;
const app = express() ;
let noCaching = true;

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
    return res.render( 'index.njk' ) ;
} ) ;

// setup port and listen
app.listen( 3000 ) ;
