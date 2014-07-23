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
  if (!this.head) { // head = null
    this.head = new ListNode(null, val, this.tail);
  } else if (!this.tail) { // head != null, tail = null
    this.tail = this.head;
    this.head = new ListNode(null, val, this.tail);
    this.tail.prev = this.head;
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
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
    this.head.prev = null;
    return head.val;
  }
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  if (!this.tail) {
    this.tail = new ListNode(this.head, val, null);
  } else if (!this.head) {
    this.head = this.tail;
    this.tail = new ListNode(this.head, val, null);
    this.head.next = this.tail;
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
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
    this.tail.next = null;
    return tail.val;
  }
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  if (node === this.tail) {
    this.pop();
  } else {
    node.delete();
  }
  this.shift(node.val);
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  if (node === this.head) {
    this.unshift();
  } else {
    node.delete();
  }
  this.push(node.val);
};

// Convert to an array
List.prototype.toArray = function () {
  var next = this.head || this.tail;
  var result = [];
  while (next) {
    result.push(next.val);
    next = next.next;
  }
  return result;
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

ListNode.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};

module.exports = List;
