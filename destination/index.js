"use strict";
// // Datatypes -primitive
// // Explicit
// // String
// let Emp_name:string = 'Tawfiq';
// // Integerz
// let Emp_id:number = 100;
// // Boolean
// let Emp_Permanent:boolean = true;
// console.log(`Employee Name is ${Emp_name} and Employee ID is ${Emp_id} and Employee is Permanent --> ${Emp_Permanent}`)
// // Array
// let myArray:number[] = [1,2,3,4,5]
// let strArray:string[] = ['a','b','c']
// let booleanArr:boolean[] = [true,false]
// let newArr:readonly number[] = [1,2,4,5,6]
// /*-----------------------------------------------------------------------------------*/
// // Implicit
// // String
// let Empq_name= 'Tawfiq';
// // Integer
// let Empq_id = 100;
// // Boolean
// let Empq_Permanent = true;
// let myArr = [1,2,3,4,5]
// let strArr = ['a','b','c']
// let booleanAr = [true,false]
// // Object
// let newObj:{name:string,age:number,isMarried:boolean} = {
//     name:"Tawfiq",
//     age:21,
//     isMarried:false
// }
// type Emoloyee  = {
//     emp_name:string,
//     emp_age : number,
//     emp_status:boolean
// }
// let empObj: Emoloyee = {
//     emp_name : "Tawfiq",
//     emp_age:21,
//     emp_status:false
// }
// Variable declaration - Type innoation
let Myname = 'Tawfiq sirajudeen';
// Variable declare - Type inference
let number = 78;
// let myObj:Person = {
//     name:"Tawfiq Sirajudeen",
//     age:12,
//     isEngineer:false
// }
// Function with typed params and return type
function callback(a, b) {
    return a + b;
}
// Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "Kasim";
    Direction["Down"] = "Tawfiq";
    Direction["Right"] = "Sharma";
    Direction["Left"] = "Rizwan";
})(Direction || (Direction = {}));
let Move = Direction.Down;
// console.log('This is direction of enum ' + Move)
// Type casting
let x = "Union";
x;
console.log(' type of ' + typeof x);
let newAr = x.split('');
console.log(newAr);
let userId = "abc123";
let productId = "product_567";
const user1 = { name: "Alice", age: 25, isAdmin: true };
const user2 = { name: "Bob", age: 30, isAdmin: false };
const add = (x, y) => x + y;
console.log(add(5, 10)); // Output: 15
//   Tuple
let person;
person = ['tawfiq', 20, 30];
let userInfo;
userInfo = [true, "Alice", 30];
let product;
product = ["Laptop", 1200];
// Accessing elements
console.log(product[0]); // Output: Laptop
console.log(product[1]); // Output: 1200
// Modifying elements
product[1] = 1300; // Valid
console.log(product[1]); // Output: 1300
// product[0] = 1000;     // Error: Type 'number' is not assignable to type 'string'
// Class 
class Person {
    constructor(stud_name, stud_age) {
        this.name = stud_name;
        this.age = stud_age;
    }
    getName() {
        return this.name;
    }
}
let detail = new Person('Tawfiq', 21);
console.log(detail);
console.log(detail.getName());
class Empdetails {
    constructor(emp_id, emp_name, emp_city) {
        this.getName = () => {
            return this.emp_name;
        };
        this.emp_id = emp_id,
            this.emp_name = emp_name;
        this.emp_city = emp_city;
    }
    getFull() {
        return `NAME IS ${this.emp_name} , EMPLOYEE ID IS ${this.emp_id} AND EMPLOYEE ADDRESS IS ${this.emp_city}`;
    }
}
const emp_details = new Empdetails(1, 'Tawfiq', 'Chennai');
console.log(emp_details.getName());
console.log(emp_details.getFull());
