var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

// Insert at the head of the list.
List.prototype.shift = function (val) {
  if (!this.head) {
    this.head = new ListNode(null, val, this.tail);
  } else {
    this.head = new ListNode(null, val, this.head);
  }
};

// Delete at the head of the list.
List.prototype.unshift = function () {
  if (!this.head) {
    if (!this.tail) {
      return null;
    } else {
      return this.pop();
    }
  } else {
    var head = this.head;
    this.head = this.head.next;
    return head.val;
  }
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  if (!this.tail) {
    this.tail = new ListNode(this.head, val, null);
  } else {
    this.tail = new ListNode(this.tail, val, null);
  }
};

// Delete at the end of the list.
List.prototype.pop = function () {
  if (!this.tail) {
    if (!this.head) {
      return null;
    } else {
      return this.unshift();
    }
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    return tail.val;
  }
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  if (!node.prev) { node.prev.next = node.next; }
  if (!node.next) { node.next.prev = node.prev; }
  node.next = this.head;
  node.prev = null;
  this.head = node;
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  if (!node.prev) { node.prev.next = node.next; }
  if (!node.next) { node.next.prev = node.prev; }
  node.prev = this.tail;
  node.next = null;
  this.tail = node;
};

// Insert a value right after the node.
ListNode.prototype.insertAfter = function (val) {
  var next = this.next;
  this.next = new ListNode(this, val, next);
  if (next) { next.prev = this.next; }
};

// Insert a value right before the node.
ListNode.prototype.insertBefore = function (val) {
  var prev = this.prev;
  this.prev = new ListNode(prev, val, this);
  if (prev) { prev.next = this.prev; }
};

module.exports = List;
