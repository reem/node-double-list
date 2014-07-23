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

