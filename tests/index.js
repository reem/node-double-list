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
        var list = List.fromArray([1, 2, 3, 4, 5]);
        list.unshift();
        demand(list.toArray()).to.eql([2, 3, 4, 5]);
      });
    });

    describe('pop', function () {
      it('should remove from the end of a list', function () {
        var list = List.fromArray([1, 2, 3, 4, 5]);
        list.pop();
        demand(list.toArray()).to.eql([1, 2, 3, 4]);
      });
    });
  });

  describe('interaction with arrays', function () {
    describe('toArray', function () {
      it('should convert to an array', function () {
        var list = new List();
        list.push(1); list.push(2); list.push(3);
        demand(list.toArray()).eql([1, 2, 3]);
      });
    });

    describe('fromArray', function () {
      it('should convert from an array', function () {
        var list = List.fromArray([1, 2, 3]);
        demand(list.toArray()).eql([1, 2, 3]);
      });
    });
  });

  describe('movement', function () {
    describe('moveToFront', function () {
      it('should move a node to the front', function () {
        var list = List.fromArray([1, 2, 3]);
        list.moveToFront(list.head.next);
        demand(list.toArray()).eql([2, 1, 3]);
      });
    });

    describe('moveToEnd', function () {
      it('should move a node to the end', function () {
        var list = List.fromArray([1, 2, 3]);
        list.moveToEnd(list.head.next);
        demand(list.toArray()).eql([1, 3, 2]);
      });
    });
  });

  describe('ListNode', function () {
    describe('insertion around', function () {
      describe('insertAfter', function () {
        it('should insert a node after this one', function () {
          var list = List.fromArray([1, 2, 3]);
          list.head.next.insertAfter(4);
          demand(list.toArray()).eql([1, 2, 4, 3]);
        });
      });

      describe('insertBefore', function () {
        it('should insert a node before this one', function () {
          var list = List.fromArray([1, 2, 3]);
          list.head.next.insertBefore(4);
          demand(list.toArray()).eql([1, 4, 2, 3]);
        });
      });
    });

    describe('deletion around', function () {
      describe('delete', function () {
        it('should delete itself', function () {
          var list = List.fromArray([1, 2, 3]);
          list.head.next.delete();
          demand(list.toArray()).eql([1, 3]);
        });
      });
    });
  });
});
