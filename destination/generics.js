"use strict";
// Generics in function
function generics(name) {
    return name;
}
generics("Tawfiq");
// Classes in generics
class Generics {
    constructor(key) {
        this.myKey = key;
    }
    getKey() {
        return this.myKey;
    }
}
const key_one = new Generics("1");
console.log(key_one.getKey());
const myObj = {
    name: "Tawfiq",
    age: 21
};
