const express = require( 'express' ) ;
const nunjucks = require( 'nunjucks' ) ;
const app = express() ;
let noCaching = true;
const config = require('./config/config');

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
} ) ;

app.get( '/:page', function( req, res ) {
  let page = req.params.page.replace(".html", "");
  return res.render( page + '.njk' , config.njk.templateVars ) ;
} ) ;



app.get( '/:topic/:subpage', function( req, res ) {
  let subpage = req.params.subpage.replace(".html", "");
  let topic = req.params.topic;
  return res.render( topic + '/' + subpage + '.njk' , config.njk.templateVars ) ;
} ) ;



let date = require('date-and-time');

// setup port and listen
app.listen( 3000 ) ;
