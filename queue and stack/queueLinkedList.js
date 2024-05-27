class Node{
    constructor(value){
        this.value=value;
        this.next = null
    }
}
class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(value){
        const node = new Node(value)
        if(!this.rear){
            this.front=this.rear = node;
        }
        else{
            this.rear.next = node;
            this.rear = node;
        }
    }
    dequeue(){
        if(!this.front){
            return null;
        }
        else{
            this.front = this.front.next
            if(!this.front){
                this.rear = null;
            }
        }
    }
    print(){
        let result = '';
        let curr = this.front;
        while(curr){
            result +=curr.value+' ';
            curr = curr.next;
        }
        console.log(result)
    }
}
const queue = new Queue();
queue.enqueue(390);
queue.enqueue(38);
queue.enqueue(58);
queue.print();
queue.dequeue();
queue.enqueue(24)
queue.print()