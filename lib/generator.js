'use strict';

var _ = require('lodash');
var fs = require("fs");
var path = require("path");

/**
 * @constructor
 */
function Generator() {

};


Generator.prototype.findSourceFiles = function(direcTory, cb) {
  fs.readdir(direcTory, function(err, files) {
    var sourceFileNames = _.filter(files, function(file) {
      return file !== "layout.html"
    });
    var sourceFiles = sourceFileNames.map(function(file){
      return path.join(direcTory, file);
    });
    cb(null, sourceFiles);
  });
};

Generator.prototype.findLayoutFile = function(direcTory, cb) {
  fs.readdir(direcTory, function(err, files) {
    // Reading directory called direcTory
    if (err) { return cb(err); }
    // If it can't read the directory, it calls the callback of findLayoutFile
    // with an error
    var layoutFileName = _.find(files, function(file) {
      return file === "layout.html";
    });
    // Setting layoutFileName equal to first item in the array that
    // matches layout.html
    if (layoutFileName) {
      var layoutFile = path.join(direcTory, layoutFileName);
    }
    // If layoutFileName exists, then declare variable layoutFile and
    // set equal to normalized concatenation of direcTory and layoutFileName
    if (layoutFile) { cb(null, layoutFile); }
    // If layoutFile was created, call the findLayoutFile callback with no error
    // and the result, layoutFile
    else {
      cb(new Error('missing layout.html file'));
    }
    // If layoutFile was not created, call the findLayoutFile callback with
    // a new instance of the class Error "missing layout.html file"
  });
};

Generator.prototype.generateSite = function(directoryOfFiles, newDirectory, cb) {
  // var layoutFile = this.findLayoutFile(directoryOfFiles);

  // // {Array.<Sting>} sourceFiles is an array of file names
  // var sourceFiles = this.findSourceFiles(directoryOfFiles);

  // sourceFiles.forEach(function(sourceFile) {
  //   this.generateOutputFile(layoutFile, sourceFile, newDirectory, function(err) {
  //     // generation done
  //   });
  // }.bind(this));

  // TODO: only call the callback when all of the source files have been
  // written.

  setTimeout(cb, 0);
};

/**
 * Generate an output file by creating an amalgamation of the layout file and
 * the source file. A new file will be created in the output directory with
 * the amalgamated content. The new file's name will be the same as that of the
 * input file.
 *
 * @param  {String} layoutFile - The path to the layout file.
 * @param  {String} sourceFile - The path to the source file.
 * @param  {String} outputDirectory - The path to the output directory.
 * @param  {Function(Error)} cb - The callback function.
 */
Generator.prototype.generateOutputFile = function(layoutFile, sourceFile, outputDirectory, cb) {
  // find and read layoutFile and sourceFile in given directory
  // integrate contents of layoutFile and sourceFile
  // generate new file in specified/existing output directory
  // inject integrated contents into new file
  


  setTimeout(cb, 0);
};

module.exports = Generator;
