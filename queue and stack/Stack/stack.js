class Stack {
    constructor() {
        this.values = {};
        this.top = 0;
    }

    push(value) {
        this.values[this.top] = value;
        this.top++;
    }

    pop() {
        if (this.top === 0) {
            console.log("Stack is empty");
            return undefined;
        }

        this.top--;
        const value = this.values[this.top];
        delete this.values[this.top];
        return value;
    }

    print() {
        console.log(this.values);
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.print();
s.pop();
s.pop();                                                                                                  
s.print();