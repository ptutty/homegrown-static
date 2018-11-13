'use strict'
const config = require('../../config/config');
const express = require('express')

module.exports = () => {
  let Router = express.Router({mergeParams: true})


  Router
    .route('/')
    .get((req, res, next) => {
      let subpage = req.params.subpage.replace(".html", "");
      let slug = req.params.page + '/' + req.params.child + '/' + subpage;
      return res.render( slug + '.njk' , config.njk.templateVars ) ;

    })

  return Router
}
