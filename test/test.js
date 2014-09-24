var expect = require("chai").expect;
var path = require('path');
var fs = require('fs');

var Generator = require("../lib/generator");

describe("site generator", function() {
  it("creates page1.html", function (done) {
    var site1 = path.join(__dirname, 'fixtures/site1');
    // Creates a new variable site1 equal to the normalized
    // concatenation of __dirname + 'fixtures/site1' i.e.
    // it creates a String out of the path that the computer can make sense of
    var generator = new Generator();
    // Declares the variable generator, which is equal to a
    // new instance of the Generator class
    var newDirectory = path.join(__dirname, 'tmp');
    // Declares a new variable equal to a String that is the
    // result of __dirname + 'tmp' (this is where the new site will live)
    generator.generateSite(site1, newDirectory, function() {
    // Calling the .generateSite method, which creates a new
    // directory with the contents of site1
      fs.readdir(newDirectory, function(err, directoryContents) {
      // Calling the readdir method of the fs module to read the
      // directory newDirectory
        expect(directoryContents).to.eql(['page1.html', 'page2.html']);
        // Verifying that directoryContents returns an array of two strings
        // representing HTML files
        var opts = { encoding: 'utf8' };
        // Declaring the variable opts which his equal to an object with
        // key encoding and an associated value: 'utf8'
        var expectedSite = path.join(__dirname, 'fixtures/expected/site1');
        // Declaring a new variable expectedSite that is equal to the normalized
        // concatenation of __dirname and 'fixture/expected/site1'
        var expectedPage1 = path.join(expectedSite, 'page1.html');
        // Declaring the variable expectedPage1 that is equal to the normalized
        // concatenation of expectedSite and 'page1.html'
        var newPage1 = path.join(newDirectory, 'page1.html');
        // Setting the variable newPage1 to equal the normalized concatenation
        // of newDirectory and 'page1.html'
        var expectedPage2 = path.join(expectedSite, 'page2.html');
        // Declaring the variable expectedPage2 which will be equal to the normalized
        // concatenation of expectedSite and 'page2.html'
        var newPage2 = path.join(newDirectory, 'page2.html');
        // Declaring the variable newPage2 which will be equal to the normalized
        // concatenation of newDirectory and 'page2.html'
        fs.readFile(expectedPage1, opts, function(err, expectedPage1Contents) {
        // Calling the readFile method of Node's File System module ('fs')
        // filename = expectedPage1 (the path of our first expected page)
        // options = opts (an object we made specifying the encoding)
        // callback = a function with two arguments:
          // err (an error)
          // expectedPage1Contents (the contents of the file after it has been read)
          fs.readFile(newPage1, opts, function(err, newPage1Contents) {
          // See lines 47 - 52
            fs.readFile(expectedPage2, opts, function(err, expectedPage2Contents) {
            // See lines 47 - 52
              fs.readFile(newPage2, opts, function(err, newPage2Contents) {
              // See lines 47 - 52
                expect(newPage1Contents).to.eql(expectedPage1Contents);
                // Verifying that the contents of 'tmp/page1.html' is equal to
                // the contents of 'fixtures/expected/site1/page1.html'
                expect(newPage2Contents).to.eql(expectedPage2Contents);
                // Verifing that the contents of 'tmp/page2.html' is equal to
                // the contents of 'fixtures/expected/site1/page2.html'
                done();
                // The optional argument of the it() function's callback;
                // it let's mocha know that the test has completed and that it
                // can move on to the next test.
              }); // <------- Note: Callback hell; each readFile calls another
            }); // <---------       readFile until all are finished i.e. the
          }); // <-----------       the files are read one after another.
        }); // <-------------
      }); // <---------------
    }); // <-----------------
  });
});