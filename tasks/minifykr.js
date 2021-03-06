/*
 * grunt-minifykr
 * 
 *
 * Copyright (c) 2012 Manuel Cabral
 * Licensed under the MIT license.
 */
var minifykr = require('minifykr');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('minifykr', 'Your task description goes here.', function() {
    //grunt.log.write(grunt.helper('minifykr'));
    var done = this.async();

    var filesToMinify = this.data;
    if(!Array.isArray(filesToMinify)) { filesToMinify = [ filesToMinify ]; }

    filesToMinify = filesToMinify.map(function(fileObj) {
      if(typeof(fileObj) == 'string') { return { inputFile: fileObj }; }
      else return fileObj;
    });

    filesToMinify.forEach(function(fileObj) {

      minifykr.file(fileObj.inputFile, fileObj.outputFile, fileObj.encrypt, fileObj.minify, function(err, success) {
        if(err) { grunt.fail.fatal("Exception calling minifykr: " + err); }
        done(err, success);
      });
    });
  });

};
