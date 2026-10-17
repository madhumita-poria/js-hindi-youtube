// primitive dataTypes

// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

console.log(typeof outSideTemp); // output is object not null

let userEmail;    // output : undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof anotherId);   // symbol type is symbol


console.log(id === anotherId)

const bigNumber = 98457867545783893n  // BigInt number

console.log(typeof bigNumber);  // BigInt


// Reference or non-primitive types


// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

console.log(typeof heros);     // array type is object


let myObj = {
    name: "madhu",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);   // function (it is also called object function)





