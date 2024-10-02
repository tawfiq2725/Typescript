"use strict";
// // Generics in function
const add = (a, b) => a + b;
// console.log(add(45,32))
const today = new Date(); // Get today's date
const tomorrow = new Date(today); // Clone today's date
tomorrow.setDate(today.getDate() + 1); // Add one day to today's date
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
