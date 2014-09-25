'use strict';

var _ = require('lodash');
var fs = require("fs");
var path = require("path");

function Generator() {

};


Generator.prototype.findSourceFiles = function() {
  // Put some stuff in here
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

module.exports = Generator;
