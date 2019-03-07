# A local dev environment for easy deploying static sites to Netlify



## Local prototyping environment

This codebase allows you to quickly get a local node server running using:


- Nunjucks for HTML templating
- Node Express to serve pages
- Gulp for SASS compiling, LiveReload and building static HTML to /dist.


    npm install

This will install all the Node modules required


    npm start

To spin up local server http://localhost:3000/

Install LiveReload extension for chrome and enable live reloading for site when editing.


## Requirements

You'll need:


- Node.js 8.x.x and NPM

**optional**


- Atom (or equivalent text editor)
- Command line tools
- Git desktop of equivalent


The codebase includes build scripts for things like SASS to CSS and static site generation. Running:


      gulp build


Will deploy the site in the dist directory for use as a demo you can share with others.
Pushing changes back to the remote git repository will deploy these static build files to the following address:

https://warwick-scs.netlify.com/

More documents


- making pages with nunjucks
- Netlify publishing
##
