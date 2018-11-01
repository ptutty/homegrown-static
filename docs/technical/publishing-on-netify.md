# Publishing on the web (Heroku)

We are using [Netify](https://app.netlify.com/account/sites) to host prototype online. It’s simple and fast to deploy new versions as you work. Once your prototype is on Netify, other people will be able to access and try your prototype from their own computers or mobile devices.

> **DO NOT** enter real user data in to prototypes hosted on Netify. If your prototype stores or collects user data, talk to a security professional about appropriate security steps you must take.



https://staging--warwick-scs.netlify.com/


** Continuous deployment

Anything in the 'dest' directory is deployed to Netlify once it is push to GitHub.

> **Build locally first** make sure you do the build locally by running 'gulp build' (currently working on a remote build script)

The production branch will show here

https://warwick-scs.netlify.com/


The staging branch will show here

https://staging--warwick-scs.netlify.com/

If you created a new branch and want to publish it to Netlify you'll need to specify it in the Netlify UI.
