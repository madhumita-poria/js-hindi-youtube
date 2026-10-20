const score = 400               //it is just number.  primitive data type
console.log(typeof score);   // number
console.log(score);                // 400


const balance = new Number(100)       // it is specific define Number.   non-primitive data type
console.log(typeof balance);        // object
console.log(balance);                   // [Number: 100]


console.log(typeof(balance.toString()));       // string
console.log(balance.toString().length);       // 3
console.log(balance.toFixed(2));    


const otherNumber =123.8996
 
console.log(otherNumber.toPrecision(4));      // 123.9
 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ************************************* Maths *************************




