'use strict';

function Generator() {

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
