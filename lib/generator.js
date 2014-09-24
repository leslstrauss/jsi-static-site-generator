'use strict';

function Generator() {

};

Generator.prototype.generateSite = function(a, b, cb) {
  setTimeout(cb, 0);
};

module.exports = Generator;
