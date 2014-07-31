var List = require('../lib');
var demand = require('must');

describe('double-list', function () {
  it('should exist', function () {
    demand(List).to.exist();
  });

  it('should construct new Lists', function () {
    demand(new List()).to.be.an.instanceof(List);
  });

  describe('insertion', function () {
    describe('shift', function () {
      it('should insert at the head of a list', function () {
        var list = List.fromArray([2, 3, 4, 5]);
        list.shift(1);
        demand(list.toArray()).to.eql([1, 2, 3, 4, 5]);
      });
    });

    describe('push', function () {
      it('should insert at the end of a list', function () {
        var list = List.fromArray([1, 2, 3, 4]);
        list.push(5);
        demand(list.toArray()).to.eql([1, 2, 3, 4, 5]);
      });
    });
  });

  describe('deletion', function () {
    describe('unshift', function () {
      it('should remove from the head of a list', function () {

      });
    });

    describe('pop', function () {
      it('should remove from the end of a list', function () {

      });
    });
  });

  describe('interaction with arrays', function () {
    describe('toArray', function () {
      it('should convert to an array', function () {

      });
    });

    describe('fromArray', function () {
      it('should convert from an array', function () {

      });
    });
  });

  describe('movement', function () {
    describe('moveToFront', function () {
      it('should move a node to the front', function () {

      });
    });

    describe('moveToEnd', function () {
      it('should move a node to the end', function () {

      });
    });
  });

  describe('ListNode', function () {
    describe('insertion around', function () {
      describe('insertAfter', function () {
        it('should insert a node after this one', function () {

        });
      });

      describe('insertBefore', function () {
        it('should insert a node before this one', function () {

        });
      });
    });
  });
});
