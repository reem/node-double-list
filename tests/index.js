var List = require('../lib');
var demand = require('must');

describe('double-list', function () {
  it('should exist', function () {
    demand(List).to.exist();
  });
});
