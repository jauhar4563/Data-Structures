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
    insertAfter(valueToInsert, valueAfter) {
        const node = new Node(valueToInsert);
        let current = this.head;

        while (current) {
            if (current.value === valueAfter) {
                node.next = current.next;
                current.next = node;
                this.size++;
                return;
            }
            current = current.next;
        }
    }

    insertBefore(valueToInsert, valueBefore) {
        const node = new Node(valueToInsert);

        if (this.head && this.head.value === valueBefore) {
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        let current = this.head;

        while (current && current.next) {
            if (current.next.value === valueBefore) {
                node.next = current.next;
                current.next = node;
                this.size++;
                return;
            }
            current = current.next;
        }
    }
    // Printing lsit

    // Remove from the linked list

  
   


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
list.print();
list.append(60);
list.append(48);
list.print();



list.insertAfter(89, 60);
list.print();

list.insertBefore(32,48)
list.print()