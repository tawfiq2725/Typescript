
//  Class Decorator

function logger(constructor:Function){
    console.log(constructor.name);
}
@logger
class Person{
    constructor(name:string){}
}


/*

*/ 