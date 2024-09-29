// // // Datatypes -primitive

// // // Explicit

// // // String
// // let Emp_name:string = 'Tawfiq';

// // // Integerz
// // let Emp_id:number = 100;

// // // Boolean
// // let Emp_Permanent:boolean = true;

// // console.log(`Employee Name is ${Emp_name} and Employee ID is ${Emp_id} and Employee is Permanent --> ${Emp_Permanent}`)


// // // Array
// // let myArray:number[] = [1,2,3,4,5]
// // let strArray:string[] = ['a','b','c']
// // let booleanArr:boolean[] = [true,false]

// // let newArr:readonly number[] = [1,2,4,5,6]


// // /*-----------------------------------------------------------------------------------*/

// // // Implicit

// // // String
// // let Empq_name= 'Tawfiq';
// // // Integer
// // let Empq_id = 100;
// // // Boolean
// // let Empq_Permanent = true;

// // let myArr = [1,2,3,4,5]
// // let strArr = ['a','b','c']
// // let booleanAr = [true,false]



// // // Object

// // let newObj:{name:string,age:number,isMarried:boolean} = {
// //     name:"Tawfiq",
// //     age:21,
// //     isMarried:false
// // }

// // type Emoloyee  = {
// //     emp_name:string,
// //     emp_age : number,
// //     emp_status:boolean
// // }

// // let empObj: Emoloyee = {
// //     emp_name : "Tawfiq",
// //     emp_age:21,
// //     emp_status:false
// // }


// // Variable declaration - Type innoation
// let Myname:string = 'Tawfiq sirajudeen'

// // Variable declare - Type inference
// let number = 78;

// // interfaces
// interface Person  {
//     name:string,
//     age:number,
//     isEngineer:boolean
// }

// // let myObj:Person = {
// //     name:"Tawfiq Sirajudeen",
// //     age:12,
// //     isEngineer:false
// // }

// // Function with typed params and return type
// function callback(a:number , b:number):number{
//     return a+b
// }

// // Enums

// enum Direction {
//     Up = "Kasim",
//     Down = "Tawfiq",
//     Right = "Sharma",
//     Left = "Rizwan"
// }

// let Move:Direction = Direction.Down;
// // console.log('This is direction of enum ' + Move)


// // Type casting
// let x:unknown = "Union"
// x as number;
// console.log( ' type of '+ typeof x)


// let newAr:string[] = (<string>x).split('')
// console.log(newAr)



// // Alias
// type ID = string;

// let userId: ID = "abc123";
// let productId: ID = "product_567";

// //   object
// type User = {
//     name: string;
//     age: number;
//     isAdmin: boolean;
//   };
  
//   const user1: User = { name: "Alice", age: 25, isAdmin: true };
//   const user2: User = { name: "Bob", age: 30, isAdmin: false };

// //   function
//   type AddFunction = (x: number, y: number) => number;

//   const add: AddFunction = (x, y) => x + y;
  
//   console.log(add(5, 10)); // Output: 15


// //   Tuple
// let person: [string,number,number];
// person = ['tawfiq',20,30]

// let userInfo: [boolean, string, number];
// userInfo = [true, "Alice", 30];


// let product: [string, number];
// product = ["Laptop", 1200];

// // Accessing elements
// console.log(product[0]);  // Output: Laptop
// console.log(product[1]);  // Output: 1200

// // Modifying elements
// product[1] = 1300;        // Valid
// console.log(product[1]);  // Output: 1300

// // product[0] = 1000;     // Error: Type 'number' is not assignable to type 'string'


// // Class 

// class Person{
//     constructor(stud_name:string , stud_age:number){
//         this.name = stud_name;
//         this.age = stud_age;
//     }

//     getName(){
//         return this.name
//     }

// }

// let detail = new Person('Tawfiq',21)
// console.log(detail)
// console.log(detail.getName())


// // Interface with class name

// interface Employee{
//     emp_id:number,
//     emp_name:string    
// }
// interface Address{
//     emp_city:string
// }

// class Empdetails implements Employee,Address{
//     emp_id: number;
//     emp_name: string;
//     emp_city:string;

//     constructor(emp_id: number,emp_name: string,emp_city:string){
//         this.emp_id = emp_id,
//         this.emp_name = emp_name
//         this.emp_city = emp_city
//     }

//     getName = ()=>{
//         return this.emp_name
//     }

//     getFull(){
//         return `NAME IS ${this.emp_name} , EMPLOYEE ID IS ${this.emp_id} AND EMPLOYEE ADDRESS IS ${this.emp_city}`
//     }

// }
// const emp_details = new Empdetails(1,'Tawfiq','Chennai')
// console.log(emp_details.getName())
// console.log(emp_details.getFull())