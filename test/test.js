var expect = require("chai").expect;
var path = require('path');
var fs = require('fs');
var helpers = require('./helpers');

var Generator = require("../lib/generator");

describe("site generator", function() {
  it("creates page1.html", function (done) {
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
      })
    });
  });
});