// // Class 

// class Person{
    
//     private name:string;
//     protected age:number;
 
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }

//     getName():string{
//         return this.name;
//     }

//     getAge():number{
//         return this.age;
//     }

//     setName(name:string):void{
//         this.name = name;
//     }

//     setAge(age:number):void{
//         this.age = age;
//     }

//     displayInfo():void{
//         console.log(`Student name is ${this.name} and Age is ${this.age}`)
//     }

// }

// class Student extends Person{
//     private stu_id:number;
//     private course_enroll:string[];

//     constructor(name:string,age:number,stu_id:number,course_enroll:string[]){
//         super(name,age);
//         this.stu_id = stu_id;
//         this.course_enroll = course_enroll 
//     }

//     displayInfo():void{
//         console.log(`Student name is ${this.getName()}`)
//     }


// }

// const stu_1 = new Person('Tawfiq',21)



// Polymorphism

// class Animal{
//     makesound():void{
//         console.log('Animal making sound')
//     }
// }

// class Cat extends Animal{
//     makesound(): void {
//         console.log('Cat making sound like meow')
//     }
// }

// class Dog extends Animal{
//     makesound(): void {
//         console.log('Dog making sound like bark')
//     }
// }

// function AnimalSound(animal:Animal){
//     return animal.makesound()
// }

// const mycat = new Cat()
// const mydog = new Dog()

// AnimalSound(mycat)
// AnimalSound(mydog)


// Encapsulation - Bundling the data (properties) and the methods (functions) that operate on that data into a single unit (class)

// Two methods - 1.manual 2.getter & setter

// class Bank {
    
//     private balance:number;

//     constructor(initialBalance:number){
//         this.balance = initialBalance
//     }

//     public getBalance():number{
//         return this.balance;
//     }

//     public debit(amount:number):void{
//         if(amount >0 && amount<=this.balance){
//             this.balance = this.balance-amount
//             console.log(`Withdraw successfully`)
//         }
//         else{
//             console.log(`Insuffiecient Balance or Server error`)
//         }
//     }

//     public credit(amount:number):void{
//         if(amount>0){
//             this.balance = this.balance + amount
//             console.log(`Money added successfully`)
//         }
//         else{
//             console.log(`Negatives are not accepted`)
//         }
//     }
// }

// const TawfiqAccount = new Bank(10);
// console.log(TawfiqAccount.getBalance())
// TawfiqAccount.credit(12000)
// console.log(TawfiqAccount.getBalance())


// abstract class Animal{

//     abstract makeSound():void;
//     move():void{
//       console.log('roaming')
//     }
  
//   }
  
//   class Cat extends Animal{
//       makeSound():void{
//         console.log("meow")
//       }
//   }
//   class Dog extends Animal{
//       makeSound():void{
//         console.log("bark")
//       }
//   }
  
//   const myCat = new Cat()
//   const myDog = new Cat()
  
//   myCat.move()
//   myDog.makeSound()