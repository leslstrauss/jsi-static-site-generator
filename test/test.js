var expect = require("chai").expect;
var path = require('path');
var fs = require('fs');

var Generator = require("../lib/generator");


describe("site generator", function() {
  it("creates page1.html", function (done) {
    var site1 = path.join(__dirname, 'fixtures/site1');
    var generator = new Generator();
    var newDirectory = path.join(__dirname, 'tmp');
    generator.generateSite(site1, newDirectory, function() {
      fs.readdir(newDirectory, function(err, directoryContents) {
        expect(directoryContents).to.eql(['page1.html', 'page2.html']);
        var opts = { encoding: 'utf8' };
        var expectedSite = path.join(__dirname, 'fixtures/expected/site1');
        var expectedPage1 = path.join(expectedSite, 'page1.html');
        var newPage1 = path.join(newDirectory, 'page1.html');
        var expectedPage2 = path.join(expectedSite, 'page2.html');
        var newPage2 = path.join(newDirectory, 'page2.html');
        fs.readFile(expectedPage1, opts, function(err, expectedPage1Contents) {
          fs.readFile(newPage1, opts, function(err, newPage1Contents) {
            fs.readFile(expectedPage2, opts, function(err, expectedPage2Contents) {
              fs.readFile(newPage2, opts, function(err, newPage2Contents) {
                expect(newPage1Contents).to.eql(expectedPage1Contents);
                expect(newPage2Contents).to.eql(expectedPage2Contents);
                done();
              });
            });
          });
        });    
      });
    });
  });
});