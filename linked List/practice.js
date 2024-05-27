class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next !== null){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++; // Increment the size after appending
    }

    insert(value, index){
        const node = new Node(value);
        if(index > this.size){
            return null;
        }
        else{
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    print(){
        if(this.isEmpty()){
            return null;
        }
        else{
            let prev = this.head;
            let listValues = '';
            while(prev !== null){
                listValues += prev.value + ' ';
                prev = prev.next;
            }
            console.log(listValues);
        }
    }
}

const list  = new LinkedList();
list.append(20);
list.print();
