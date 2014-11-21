# Installation #
If this if your first time with jekyll, install like this (you might need to use sudo):

```
#!terminal

$ gem install jekyll
```

Once it is all installed, fork this repo, name it after your project. Clone that fork like normal into a directory where you keep your site. Change into that directory and install all the dependencies with bower.

```
#!terminal

$ bower install
```

Then you are good to go. Jekyll compiles all SASS. To start a server and a watcher that compiles files as you change them: 

```
#!terminal

$ jekyll server --watch
```