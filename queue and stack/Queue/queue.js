class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(value){
        this.items[this.rear]=value;
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front]
        this.front++;
        return item
    }
    isEmpty(){
        
            return this.rear==this.front
        
    }
    size(){
        return this.rear -this.front
    }
    print(){
        console.log(this.items)
    }
}


const queue = new Queue();
queue.enqueue(20);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.print()
queue.dequeue()
queue.dequeue()
queue.print()




