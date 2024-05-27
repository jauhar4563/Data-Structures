class Node {
    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

// hasOwnProperty(key) to check if there is is this key present


class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const charToInsert = word[i];
            if (!curr.children.hasOwnProperty(charToInsert)) {
                curr.children[charToInsert] = new Node();
            }
            curr = curr.children[charToInsert];
        }
        curr.isWordEnd = true;
    }

    contains(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const charToFind = word[i];
            if (!curr.children.hasOwnProperty(charToFind)) {
                return false;
            }
            curr = curr.children[charToFind];
        }
        return curr.isWordEnd;
    }

    startsWithPrefix(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const charToFind = prefix[i];
            if (!curr.children.hasOwnProperty(charToFind)) {
                return false;
            }
            curr = curr.children[charToFind];
        }
        return true;
    }

    displayTrie() {
        this._displayTrieHelper(this.root, "");
    }

    _displayTrieHelper(node, currentString) {
        if (node.isWordEnd) {
            console.log(currentString);
        }

        for (const char in node.children) {
            if (node.children.hasOwnProperty(char)) {
                this._displayTrieHelper(node.children[char], currentString + char);
            }
        }
    }
    delete(word) {
        if (!this.contains(word)) {
            console.log(`The word "${word}" is not in the trie.`);
            return;
        }

        this._deleteHelper(this.root, word, 0);
        console.log(`The word "${word}" has been deleted from the trie.`);
    }

    _deleteHelper(node, word, index) {
        if (index === word.length) {
            // We've reached the end of the word, mark isWordEnd as false
            node.isWordEnd = false;
            return;
        }

        const charToDelete = word[index];
        const nextNode = node.children[charToDelete];

        this._deleteHelper(nextNode, word, index + 1);

        // If the child node has no other children and is not the end of another word, we can safely delete it
        if (Object.keys(nextNode.children).length === 0 && !nextNode.isWordEnd) {
            delete node.children[charToDelete];
        }
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("ba");
trie.insert("nana")

trie.insert("banana")
console.log(trie.contains("apple")); // true
console.log(trie.contains("apples")); // false
console.log(trie.startsWithPrefix("ban")); // true

console.log("Trie Contents:");
trie.displayTrie();
