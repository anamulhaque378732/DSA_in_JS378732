// Stack data Structure implementation
// lifo : last in first out

class Stack {
    constructor() {
        this.arr = [];
    }
    // added
    added(value) {
        this.arr.push(value)
        return this.arr
    };
    // remove
    remove() {
        this.arr.pop();
        return this.arr
    };
    // lookUp
    looUp() {
        return this.arr[this.arr.length - 1]
    }
};
let stack = new Stack();
// console.log(stack.added(5));
// console.log(stack.added(10));
// console.log(stack.added(15));
// console.log(stack.looUp());
// console.log(stack.remove());
// console.log(stack.remove());
// console.log(stack.remove());
// console.log(stack.remove());