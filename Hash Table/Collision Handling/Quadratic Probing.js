class QuadraticHashtable {
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
        let i = 1;
        while(this.table[index]!==undefined){
            index = (index+i*i) % this.size;
            i++;
        }
        this.table[index] = value;
    }
    get(key){
        let index = this.hash(key);
        let i =0;
        while(this.table[index]!==undefined  && this.table[index].key!==key){
            index = (index+i*i) % this.size;
            i++;
        }
        return this.table[index];
    }
    remove(key){
        let index = this.hash(key);
        let i =0;
        while(this.table[index]!==undefined  && this.table[index].key!==key){
            index = (index+i*i) % this.size;
            i++;
        };
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

const qtable = new QuadraticHashtable(40);
qtable.set("thomas","Mern");
qtable.set('SHAMAL',"python");
qtable.set("thomas","Mern");
qtable.set('SHAMAL',"python");
qtable.set("thomas","Mern");
qtable.set('SHAMAL',"python");
qtable.set("thomas","Mern");
qtable.set('SHAMAL',"python");
qtable.set("thomas","Mern");
qtable.set('SHAMAL',"python");
qtable.display();
