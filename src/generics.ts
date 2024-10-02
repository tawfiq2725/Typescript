// // Generics in function

// function generics<T>(name:T):T{
//     return name
// }
// generics<string>("Tawfiq")


// // Classes in generics

// class Generics<T>{
    
//     private myKey:T;

//     constructor(key:T){
//         this.myKey = key
//     }

//     getKey():T{
//         return this.myKey
//     }
// }
// const key_one = new Generics<string>("1")
// console.log(key_one.getKey())


// // Generics in Interfaces

// interface Keyvalues<T,U>{
//     name:T;
//     age:U;
// }

// const myObj:Keyvalues<string,number>={
//     name:"Tawfiq",
//     age:21
// }





// // // Generics
// // function myFunction<T>(arg:T):T{
// //     return arg
// // }
// // console.log(myFunction<number>(23))


// // Generic Interface
// // interface Employee<T,U>{
// //   name:T,
// //   age:U
// // }

// // const myObj:Employee<string,number>= {
// //   name:"Tawfiq",
// //   age:21
// // }

// // console.log(myObj)



// // Generic using class

// class Person<T>{
//     name:T
//     constructor(name:T){
//       this.name = name
//     }
//     getName(){
//       return this.name;
//     }
//   }
  
//   class Employee<T,U> extends Person<T>{
//     emp_id:U
//     constructor(name:T,emppId:U){
//       super(name);
//       this.emp_id = emppId
//     }
//     getDetails(){
//       return `Employee name is ${this.name} and Employee Id is ${this.emp_id}`
//     }
//   }
  
//   const emp1 = new Employee<string , number>("Tawfiq",1)
//   console.log(emp1.getDetails()) 
  
  
  
//   Interfaces
interface Employee{
    name:string,
    age:number,
    isPermanet:boolean,
    incentives?:boolean,
    readonly accessChat:boolean  
}

// let myObj:Employee ={
//   name:"Tawfiq",
//   age:21,
//   isPermanet:false,
//   incentives:true,
//   accessChat:false
// } 


// console.log(myObj)


// Function Interfaces
interface myFun{
  (a:number,b:number):number
}
const add:myFun = (a,b)=>a+b
// console.log(add(45,32))


const today = new Date();  // Get today's date
const tomorrow = new Date(today);  // Clone today's date

tomorrow.setDate(today.getDate() + 1);  // Add one day to today's date

// Format and print the date
// console.log(tomorrow.toDateString());  // Output: A formatted date string for tomorrow


interface Person{
  name:string,
  age:number
  greet():void
}

interface Add extends Person{
    isPermanent:boolean
}

class Employee implements Person{
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }

  greet():void{
    console.log(`Hello ${this.name}`)
  }

}
  