class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class SeperateHashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    if (this.table[index] !== undefined) {
      this.table[index] = new Node(key, value);
    } else {
      let currentNode = this.table[index];
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode = new Node(key, value);
    }
  }
  get(key) {
    let index = this.hash(key);
    let currentNode = this.table[index];
    while (currentNode) {
      if (currentNode.key == key) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) return;
    if (this.table[index].key === key) {
      this.table[index] = this.table[index].next;
      return;
    }
    let currentNode = this.table[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      let currentNode = this.table[i];
      while (currentNode) {
        console.log(`${i} -> (${currentNode.key}, ${currentNode.value})`);
        currentNode = currentNode.next;
      }
    }
  }
}
