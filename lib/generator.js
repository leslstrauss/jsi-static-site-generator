'use strict';

var _ = require('lodash');
var fs = require("fs");
var path = require("path");

function Generator() {

};

Generator.prototype.findLayoutFile = function(direcTory, cb) {
  cb(null, path.join(direcTory, 'layout.html'));
  return;
  var layoutFile;
  fs.readdir(direcTory, function(err, files) {
    var layoutFileName = _.find(files, function(file) {
      return file === "layout.html";
    });
    if (layoutFileName) {
      layoutFile = path.join(direcTory, layoutFileName);
    }
    cb(err, layoutFile);
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
