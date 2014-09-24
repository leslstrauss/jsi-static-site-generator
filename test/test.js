var expect = require("chai").expect;
var path = require('path');
var fs = require('fs');

var Generator = require("../lib/generator");


describe("site generator", function() {
  it("creates page1.html", function (done) {
    var site1 = path.join(__dirname, 'fixtures/site1');
    var generator = new Generator();
    var newDirectory = path.join(__dirname, 'tmp');
    generator.generateSite(site1, newDirectory);
    fs.readdir(newDirectory, function(err, directoryContents) {
      expect(directoryContents).to.eql(['page1.html', 'page2.html']);
      // expect 2 new files inside of a directory.
      console.log(directoryContents);
      // how to do stuff to test that the contents of the two files
      // are correct?

      expect("../site/page1.html").to.be.true;
      done();
    });


  });

});