// Datatypes -primitive

// Explicit

// String
let Emp_name:string = 'Tawfiq';

// Integer
let Emp_id:number = 100;

// Boolean
let Emp_Permanent:boolean = true;

console.log(`Employee Name is ${Emp_name} and Employee ID is ${Emp_id} and Employee is Permanent --> ${Emp_Permanent}`)


// Array
let myArray:number[] = [1,2,3,4,5]
let strArray:string[] = ['a','b','c']
let booleanArr:boolean[] = [true,false]

let newArr:readonly number[] = [1,2,4,5,6]


/*-----------------------------------------------------------------------------------*/

// Implicit

// String
let Empq_name= 'Tawfiq';
// Integer
let Empq_id = 100;
// Boolean
let Empq_Permanent = true;

let myArr = [1,2,3,4,5]
let strArr = ['a','b','c']
let booleanAr = [true,false]



// Object

let newObj:{name:string,age:number,isMarried:boolean} = {
    name:"Tawfiq",
    age:21,
    isMarried:false
}

type Emoloyee  = {
    emp_name:string,
    emp_age : number,
    emp_status:boolean
}

let empObj: Emoloyee = {
    emp_name : "Tawfiq",
    emp_age:21,
    emp_status:false
}
