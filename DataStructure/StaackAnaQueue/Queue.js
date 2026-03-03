
// queue data structure implementation

// fifi(first in first out)

class Queue {
    constructor() {
        this.arr = [];
    };

    added(value) {
        this.arr.unshift(value);

        return this.arr
    };

    remove() {
        // const deleteItem = this.arr.shift();
        this.arr.pop();
        // console.log(deleteItem);

        return this.arr;
    };
    peek() {
        return this.arr[this.arr.length - 1];
    }


};


const queue1 = new Queue();

console.log(queue1.added(5));
console.log(queue1.added(52));
console.log(queue1.added(51));
console.log(queue1.added(45));
console.log(queue1.remove());































