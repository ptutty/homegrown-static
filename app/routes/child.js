'use strict'

const express = require('express')
const config = require('../../config/config');
const subpage = require('./subpage')

module.exports = () => {
  let Router = express.Router({mergeParams: true})

  // Fetch the child page and its content.
  Router
    .route('/')
    .get((req, res, next) => {

      let child = req.params.child.replace(".html", "");
      let slug = req.params.page + '/' + child
      return res.render( slug + '.njk' , config.njk.templateVars ) ;
    })


  Router.use('/:subpage', subpage());
  return Router
}
