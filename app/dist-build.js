const gulp = require('gulp');
const njkRender = require('gulp-nunjucks-render');
const Filehound = require('filehound');
const config = require('../config/config');
const fs = require('fs-extra')

// remove public
function deletePublic(){
  fs.remove(config.paths.public_dir)
  .then(() => {
    console.log('deleted public success!');
    createPublic();
  })
  .catch(err => {
    console.error(err)
  })
}

// create public
function createPublic() {
  fs.ensureDir(config.paths.public_dir)
  .then(() => {
    console.log('dir create success!')
    createStatic();
  })
  .catch(err => {
    console.error(err)
  })
}

// copy over static files
function createStatic() {
  fs.copy(config.paths.assets_dir, config.paths.public_dir + "/" + config.paths.public_assets_dir)
  .then(() => {
    renderToPublic();
  })
  .catch(err => {
    console.error(err)
  })
}


// build directories and compile Nunjuck templates.
function renderToPublic() {
  var dist_directories;
  Filehound.create()
    .path(config.paths.views_dir)
    .directory()
    .find()
    .then((subdirectories) => {
      console.log(subdirectories);
      dist_directories = subdirectories;
      dist_directories.push(config.paths.public_dir);
      let arrayLength = dist_directories.length;

      for (var i = 0; i < arrayLength; i++) {
        var shortDir = dist_directories[i].split('pages/')[1];
        if (shortDir !== undefined ) {
          var srcdirectory = dist_directories[i] + '/*.@(html|njk)';
          var destdirectory = config.paths.public_dir + '/' + shortDir;
        } else {
          var srcdirectory = config.paths.views_dir + '/*.@(html|njk)';
          var destdirectory = config.paths.public_dir;
        }


        gulp.src(srcdirectory)
        .pipe(
            njkRender({
              path: ['pages', 'templates' ],
              data: config.njk.templateVars,
            })
          )
          .pipe(gulp.dest(destdirectory));
      }

    });


}



module.exports = {
  // init
  build: function() {
    deletePublic();
  }

}
