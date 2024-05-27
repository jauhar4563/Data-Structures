class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class stack{
    constructor(){
        this.top = null;
    }
    push(value){
        const node = new Node(value);
        if(!this.top){
            this.top = node
        }else{

            const current = this.top;
            this.top = node;
            this.top.next = current;
        }
    }
    pop(){
        if(!this.top){
            return null
        }
        this.top  = this.top.next;
    }
    display(){
        let current = this.top;
        let result = ''
        while(current){
            result +=current.value+' ';
            current = current.next;
        }
        console.log(result)
    }
}
const Stack = new stack();
console.log(Stack.pop())
Stack.push(49);
Stack.push(48);
Stack.display();
Stack.push(42);
Stack.display();
Stack.pop();
Stack.display()

