CSS-Panda
=========

This is a *totally* worthwhile attempt at my OrganicPanda logo using only completely un-semantic divs and CSS trickery. Degrades to an unexpectedly pleasant robot-style panda for any browsers that do not support the CSS used (Transforms, Border Radius etc...).

There's a pre-built version in the *build* directory but I used SASS/Compass/Grunt so there's an interestingly complex build process:

## Requirements for building

### NodeJS
Get the latest from http://nodejs.org/

### Ruby, Sass & Compass
#### Mac
	sudo gem install sass
	sudo gem install compass

#### Linux
	sudo apt-get install ruby
	sudo apt-get install rubygems
	sudo gem install sass
	sudo gem install compass

#### Windows
Good luck to you!

### Node packages
	npm install

## Building
	grunt 
