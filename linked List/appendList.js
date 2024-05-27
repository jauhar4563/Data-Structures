class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        
    }
    // Append

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;

            }
            prev.next = node;

        }
        this.size++
    }
    // Printing lsit
    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let listHead = this.head;
            let listValues = '';
            while(listHead){
                listValues += ` ${listHead.value}`;
                listHead = listHead.next;
            }
            console.log(listValues)

        }
    }
}
let list = new linkedList()

list.print();
list.append(30);
list.print();
list.append(60);
list.append(48);
list.print();