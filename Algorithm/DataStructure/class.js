// class expression

const DataStructure = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
};
const DataStr = class {
    constructor() {
        this.storage = [];
        this.age = 15;
    };

    insert(value) {
        this.storage.push(value);
        return this.storage;
    }
    firstInsert(value) {
        this.storage.unshift(value);
        return this.storage;
    }

};

// let ds = new DataStructure("anamul", 25);

let Ds = new DataStr();


console.log(Ds.insert("15GB"));
console.log(Ds.insert("25GB"));
console.log(Ds.insert("56GB"));
console.log(Ds.insert("13GB"));
console.log(Ds.insert("255GB"));
console.log(Ds.firstInsert(0));



// class declaration

class DataStructures {

};

let cons = new DataStructures();
// console.log(cons);

































































