var path = require('path');
var fs = require('fs');

/**
 * @callback DirContentsCallback
 * @param {Error} err The error (if one occurred).
 * @param {Object} The contents of each file keyed by file name.
 */

/**
 * Read the contents of a single directory.
 *
 * @param {String} dir The directory to read.
 * @param {DirContentsCallback} cb The callback.
 */
var dirContents = module.exports.dirContents = function(dir, cb) {
  var contents = {};
  var done = false;
  var finish = function(err) {
    if (done) { return; }
    cb(err, err ? undefined : contents);
    done = true; // only finish once
  };
  fs.readdir(dir, function(err, files) {
    if (err) { return finish(err); }
    if (files.length === 0) { finish(); }
    files.forEach(function(file) {
      fs.readFile(path.join(dir, file), { encoding: 'utf8' }, function(err, fileContents) {
        if (err) { return finish(err); }
        contents[file] = fileContents;
        if (Object.keys(contents).length === files.length) {
          finish();
        }
      });
    });
  });
};

/**
 * @callback DirsContentsCallback
 * @param {Error} err The error (if one occurred).
 * @param {Object} The contents of each directory keyed by the same keys that
 * were provided to the dirsContents call.
 */

/**
 * Read the contents of a multiple directories.
 *
 * @param {Object} dirs The directories to read. The keys will be used to
 * identify each directory when the callback is called.
 * @param {DirsContentsCallback} cb The callback.
 */
var dirsContents = module.exports.dirsContents = function(dirs, cb) {
  var result = {};
  var done = false;
  var finish = function(err) {
    if (done) { return; }
    cb(err, err ? undefined : result);
    done = true; // only finish once
  };
  Object.keys(dirs).forEach(function(name) {
    var dir = dirs[name];
    dirContents(dir, function(err, contents) {
      if (err) { return finish(err); }
      result[name] = contents;
      if (Object.keys(result).length === Object.keys(dirs).length) {
        finish();
      }
    });
  });
};
