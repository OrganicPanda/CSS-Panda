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

		copy: {
			main: {
				files: [{
					expand: true,
					cwd: '<%= meta.srcPath %>font',
					src: ['**'],
					dest: '<%= meta.buildPath %>font'
				}, {
					expand: true,
					cwd: '<%= meta.srcPath %>image',
					src: ['**'],
					dest: '<%= meta.buildPath %>image'
				}]
			}
		},

		compass: {
			main: {
				options: {
					sassDir: '<%= meta.srcPath %>sass',
					cssDir: '<%= meta.buildPath %>css',
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['compass', 'copy']);

};