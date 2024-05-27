class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            this.head = node
            this.head.next = curr;
        }
    }

    pop() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            let value = this.head.value;
            this.head = null;
            return value;
        } else {
            let value = this.head;
            this.head = this.head.next;
            return value.value;
        }
    }

    display() {
        let result = '';
        let curr = this.head;
        while (curr) {
            result += `${curr.value} `;
            curr = curr.next;
        }
        console.log(result);
    }
}

class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value) {
        this.pushStack.push(value);
    }

    dequeue() {
        while (this.pushStack.head) {
            this.popStack.push(this.pushStack.pop());
        }
        if (!this.popStack.head) {
            console.log("Queue is empty");
            return null;
        }
        let dequeuedValue = this.popStack.pop();
        while (this.popStack.head) {
            this.pushStack.push(this.popStack.pop());
        }
        return dequeuedValue;
    }
    

    display() {
        this.pushStack.display();
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
queue.dequeue();
queue.dequeue();
queue.display()