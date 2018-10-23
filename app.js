const express = require( 'express' ) ;
const nunjucks = require( 'nunjucks' ) ;
const app = express() ;


let noCaching = true;

app.use('/static-files', express.static('static'));

nunjucks.configure('views', {
    express: app,
    autoescape: true,
    noCache: noCaching
});

// routes
app.get( '/', function( req, res ) {
    return res.render( 'index.njk' ) ;
} ) ;

// setup port and listen
app.listen( 3000 ) ;
