class Hashtable {
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }
    hash(key){
        let total = 0;
        for(let i = 0 ;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }
    set(key,value){
        let index = this.hash(key);
        while(this.table[index]!==undefined){
            index = (index+1) % this.size;
        }
        this.table[index] = value;
    }
    get(key){
        let index = this.hash(key);
        while(this.table[index]!==undefined  && this.table[index].key!==key){
            index = (index+1) % this.size;
        }
        return this.table[index];
    }
    remove(key){
        let index = this.hash(key);
        while(this.table[index]!==undefined  && this.table[index].key!==key){
            index = (index+1) % this.size;
        }
        this.table[index] = undefined;
    }
    display(){
        for(let i = 0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table = new Hashtable(40);
table.set("thomas","Mern");
table.set('SHAMAL',"python");
table.set("thomas","Mern");
table.set('SHAMAL',"python");
table.set("thomas","Mern");
table.set('SHAMAL',"python");
table.display();
