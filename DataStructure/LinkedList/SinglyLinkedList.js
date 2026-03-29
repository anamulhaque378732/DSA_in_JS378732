
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    };
};
// let firstNode = new Node("first");

// console.log(firstNode);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    isEmpty() {
        return this.length === 0;
    };

    // push method
    // time complexity = O(1);
    addLast(value) {
        // let newNode = {
        //     value: value,
        //     next: null
        // };
        // alternative 
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    };

    // pop method
    // time complexity = O(n)
    removeLastItem() {
        if (!this.head) {
            return null;
        };
        if (this.length === 1) {
            let removeNode = this.head;
            this.add.head = null;
            this.tail = null;
            this.length = 0;
            return removeNode;
        };
        let currentNode = this.head;
        let lastNode = this.tail;

        let newLastNode;
        while (currentNode) {
            if (currentNode.next == this.tail) {
                newLastNode = currentNode;
                break
            };
            currentNode = currentNode.next;
        };
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--;
        return lastNode;
    };

    // shift method
    // time complexity = O(1)
    removeFirstElement() {

        if (!this.head) {
            return null;
        };
        let currentNode = this.head;
        this.head = currentNode.next
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return currentNode;


    };

    // unShift method
    // time complexity = O(1)
    addFirstElement(value) {

        // let newNode = {
        //     value,
        //     next: null
        // };

        // alternative way
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        };
        this.length++;
    };
    // show list
    //  time complexity = O(n)
    showList() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next
        };
        return arr;
    };
};


let list = new SinglyLinkedList();



// ---- push method ----
list.addLast(5)
list.addLast(3)
list.addLast(8)
list.addLast("hello")
// console.log(list);


// ---- pop method ----
// list.removeLastItem();
// list.removeLastItem();
// console.log(list);


// ----- shift method ----


// list.removeFirstElement();
// list.removeFirstElement();
// list.removeFirstElement();
// list.removeFirstElement();
// console.log(list);


// ----- unShift method ---


list.addFirstElement(8888);
list.addFirstElement(888);
list.addFirstElement(88);
list.addFirstElement(8);
list.addLast("anamul");
console.log(list);
console.log(list.showList());
