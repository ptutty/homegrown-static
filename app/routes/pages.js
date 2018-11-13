
'use strict'

const express = require('express');
const config = require('../../config/config');
const child   = require('./child')

// route for pages a root level


/* basic route structure */
// currently support two directory levels below root

// level 1 = child
// level 2 = subpage



module.exports = () => {
  let Router = express.Router({mergeParams: true})

  // Fetch the page and its content.
  Router.route('/')
    .get((req, res, next) => {
      let page = req.params.page.replace(".html", "");
      return res.render( page + '.njk' , config.njk.templateVars ) ;
    })


  Router.use('/:child', child())
  return Router
}
