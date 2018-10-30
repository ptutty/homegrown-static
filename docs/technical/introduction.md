## Requirements

You'll usually need admin access to your machine to install the software. If you do not have admin access, ask your IT team to install the software for you.

You'll need:

Node.js 8.x.x and NPM
Atom (or equivalent text editor)
Command line tools (Mac)
Git bash (Windows)


## Installation

1. Clone the code source into your home directory
2. Navigated to this directory from Terminal
3. npm install - this will install all the Node modules required
4. npm start
5. view at localhost:3000
6. Install LiveReload extension for chrome and enable

## Build and publish to gitHub pages

1. run 'gulp build' from the project directory (if this errors make sure you have Gulp installed globally)
2. commit and push to gitHub
3. view static html at https://warwick-scs.netlify.com

You can read more on [deployment here](docs/publishing-on-netify.md).


## writing code

1. You write your Sass in /sass/app.scss and the Prototype Kit will compile it into the CSS used in your page (found in /docs/css/app.css). The app watches your files so this will happen automatically.
