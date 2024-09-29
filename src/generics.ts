// Generics in function

function generics<T>(name:T):T{
    return name
}
generics<string>("Tawfiq")


// Classes in generics

class Generics<T>{
    
    private myKey:T;

    constructor(key:T){
        this.myKey = key
    }

    getKey():T{
        return this.myKey
    }
}
const key_one = new Generics<string>("1")
console.log(key_one.getKey())


// Generics in Interfaces

interface Keyvalues<T,U>{
    name:T;
    age:U;
}

const myObj:Keyvalues<string,number>={
    name:"Tawfiq",
    age:21
}