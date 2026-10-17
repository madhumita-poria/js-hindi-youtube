// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);    // "2" string converting into number 2
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);   

// the reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treationg it as 0.
// that's why null >= 0 is true and null > 0 is false.  

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log(undefined == null);


console.log("2" === 2);  // strict checker



