class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class BSTree {
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }

    insert(value){
    
        const node  = new Node(value);
        if(this.isEmpty()){
            this.root = node
        }
        else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(rootNode, newNode) {
        if (newNode.value < rootNode.value) {
            if (rootNode.left == null) {
                console.log("Left");
                rootNode.left = newNode;
            } else {
                this.insertNode(rootNode.left, newNode);
            }
        } else {
            if (rootNode.right == null) {
                console.log("Right");
                rootNode.right = newNode;
            } else {
                this.insertNode(rootNode.right, newNode);
            }
        }
    }
    
    searchNode(root,value){
        if(!root){
            return false
        }else{
            if(root.value==value){
                return true
            }else{
                if(value>root.value){
                    return this.searchNode(root.left,value)
                }else{
                    return this.searchNode(root.right,value)
                }
            }
        }
    }

    // Depth first search
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right);
        }
    }

    InOrder(root){
        if(root){
            this.InOrder(root.left);
            console.log(root.value);
            this.InOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right);
            console.log(root.value)
        }
    }

    // Breadth First Search

    BFS() {
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }


    // Minimum value of the BS Tree
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    // Maximum value of the BS Tree
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
    
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node with only one child or no child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
    
            // Node with two children: Get the inorder successor (smallest
            // in the right subtree)
            root.value = this.min(root.right);
    
            // Delete the inorder successor
            root.right = this.deleteNode(root.right, root.value);
        }
    
        return root;
    }
    
}



const bst = new BSTree();

bst.insert(10);
bst.insert(5);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7)

console.log(bst.searchNode(bst.root,54))
console.log("Pre Order")
bst.preOrder(bst.root);
console.log("InOrder")
bst.InOrder(bst.root)
console.log("Post Order")
bst.postOrder(bst.root)


console.log("Breadth First Search")

bst.BFS()

console.log("Minimum value"+bst.min(bst.root));
console.log("Maximum value"+bst.max(bst.root))

bst.delete(5);
console.log("deleted")
bst.BFS()