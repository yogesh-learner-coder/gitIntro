module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			js:{
				src: ['js/*.js'],
				dest: 'build/new_js.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

}