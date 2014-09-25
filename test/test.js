var expect = require("chai").expect;
var path = require('path');
var fs = require('fs');
var helpers = require('./helpers');

var Generator = require("../lib/generator");

describe("site generator", function() {
  it.skip("creates page1.html", function (done) {
    var site1 = path.join(__dirname, 'fixtures/site1');
    // Creates a new variable site1 equal to the normalized
    // concatenation of __dirname + 'fixtures/site1' i.e.
    // it creates a String out of the path that the computer can make sense of
    var generator = new Generator();
    var expectedSite = path.join(__dirname, 'fixtures/expected/site1');
    var newDirectory = path.join(__dirname, 'tmp');
    var dirs = { expected: expectedSite, output: newDirectory };
    generator.generateSite(site1, newDirectory, function() {
      helpers.dirsContents(dirs, function(err, contents) {
        expect(contents.output).to.eql(contents.expected);
      });
    });
  });
});

describe('findLayoutFile', function() {
  it("finds the finds the layout.html", function (done) {
    var generator = new Generator();
    var mach10Directory = path.join(__dirname, "fixtures/mach10Directory");
    var layoutFile = path.join(__dirname, "fixtures/mach10Directory/layout.html");
    generator.findLayoutFile(mach10Directory, function(err, fileName) {
      expect(fileName).to.eql(layoutFile);
      done();
    });
  });

  it("returns an error when layout.html doesn't exist", function (done) {
    var generator = new Generator();
    var mach10Strikes = path.join(__dirname, "fixtures/mach10Strikes");
    var layoutFile = path.join(__dirname, "fixtures/mach10Strikes/layout.html");
    generator.findLayoutFile(mach10Strikes, function(err, fileName) {
      expect(err).to.exist;
      done();
    });
  });

  it("returns an error when directory doesn't exist", function (done) {
    var generator = new Generator();
    var mach10Strikes = path.join(__dirname, "fixtures/mach10StrikesBack");
    generator.findLayoutFile(mach10Strikes, function(err, fileName) {
      expect(err).to.exist;
      done();
    });
  });
});

describe('findSourceFiles', function() {
  it('finds the source files', function (done) {
    var generator = new Generator();
    var mach10Directory = path.join(__dirname, "fixtures/mach10Directory");
    var sourceFile1 = path.join(__dirname, "fixtures/mach10Directory/source-file1");
    var sourceFile2 = path.join(__dirname, "fixtures/mach10Directory/source-file2");
    var contentFiles = [sourceFile1, sourceFile2];
    generator.findSourceFiles(mach10Directory, function(err, sourceFiles) {
      expect(sourceFiles).to.eql(contentFiles);
      done();
    });
  });
});

// var layoutFile = this.findLayoutFile(directoryOfFiles);

  // // {Array.<Sting>} sourceFiles is an array of file names
  // var sourceFiles = this.findSourceFiles(directoryOfFiles);

  // sourceFiles.forEach(function(sourceFile) {
  //   this.generateOutputFile(layoutFile, sourceFile, newDirectory, function(err) {
  //     // generation done
  //   });
  // }.bind(this));

  // TODO: only call the callback when all of the source files have been
  // written