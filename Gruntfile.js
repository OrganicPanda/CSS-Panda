module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Read the package.json
		pkg: grunt.file.readJSON('package.json'),

		// Metadata.
		meta: {
			basePath: '',
			srcPath: 'src/',
			buildPath: 'build/'
		},

		compass: {
			main: {
				options: {
					sassDir: '<%= meta.srcPath %>sass',
					cssDir: '<%= meta.buildPath %>css',
					outputStyle: 'compressed'
				}
			}
		},

		watch: {
			scripts: {

				// When these files change
				files: ['<%= meta.srcPath %>/**/*.scss'],

				// Do this
				tasks: ['default']

			}
		}

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['compass']);

};