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
    // Insert into specific position
    insert(value,index){
        if(index<0 || index>this.size){
            return;
        }
        if(index ==0){
            this.prepend(value)
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i<index-1;i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    // Printing lsit

    // Remove from the linked list

    remove(index){
        let removedNode
        if(index==0){
            let removedNode = this.head;
            this.head = this.head.next
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode;
    }


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
list.insert(30,0);
list.print();
list.append(60);
list.append(48);
list.print();


list.insert(59,2);
list.print();

list.remove(2)
list.print();
list.remove(0);
list.print()