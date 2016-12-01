About this project
==================
This project was created to help developers make Turbolinks 5 work with Bootstrap components and understand how things work under the hood.

Some tips:
----------
1. Read the project's documentation. Like:
  * [Understand how the TL5's cache works.](https://github.com/turbolinks/turbolinks#making-transformations-idempotent)
  * Understand how your front-end framework works. In this case, which kind of changes the Bootstrap's collapse plugin will made in the html elements.
    * http://getbootstrap.com/javascript/#collapse
    * http://getbootstrap.com/components/#navbar look the *Requires JavaScript plugin* warning. ;)

2. Before use some framework, pre-processor... Create proof of concepts with the minimal of layers, to ensure that you will understand how the things works, avoiding unnecessary complexities.

3. Test, inspect, debug.

4. Get in the habit of reading your project dependencies source code.

How to run this project
=======================

Firebase CLI
------------

**Setup:**
```sh
# 1. Install Node.js and npm/yarn
# 2. Install the firebase-cli
npm install -g firebase-tools
```

**How to start the server**
```sh
firebase serve
# open localhost:5000
```

Web Server for Chrome
---------------------
1. Setup: Install the [Google Chrome extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb).
2. Launch the Web Server for Chrome App
3. Select the project's folder.
4. Open the Web Server URL.
