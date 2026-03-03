// another implementation



class AnotherStack {
    constructor() {
        this.database = {

        };
        this.count = 0
    };

    pushSomeThing(value) {
        this.count++;
        this.database[this.count] = value;
        return this.database;
    };
    popSomething() {
        let deleteItem = this.database[this.count];
        delete this.database[this.count];
        this.count--;
        console.log(deleteItem);

    };


    peek() {
        return this.database[this.count]
    }

};



let stack1 = new AnotherStack();
console.log(stack1.pushSomeThing(10));
console.log(stack1.pushSomeThing(100));
console.log(stack1.pushSomeThing(12));
console.log(stack1.pushSomeThing(46));
console.log(stack1.pushSomeThing(56));
console.log(stack1.pushSomeThing(1000));
console.log(stack1.popSomething());
console.log(stack1.peek());













































