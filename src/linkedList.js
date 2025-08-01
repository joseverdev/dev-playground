function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function ListNode2(val, next) {
  if (val === undefined) {
    this.val = 0;
  } else {
    this.val = val;
  }
  if (next === undefined) {
    this.next = null;
  } else {
    this.next = next;
  }
}

// Crear la lista: 1 -> 2 -> 3
let node3 = new ListNode(3); //3
let node2 = new ListNode(2, node3); //2 -> 3
let head = new ListNode(1, node2); //1 -> 2 -> 3
