let score = "33abc"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);            // NaN -> not a number


let score1 = null
let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);        // output: 0

let score2 = undefined
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);            // NaN

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = " "

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 -> true
// 0 -> false
// "" -> false 
// " " -> ture    

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(typeof stringNumber);
// console.log(stringNumber);


// ******************** operations **************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "madhu"
let str2 = "mita"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);     // 12
// console.log(1 + "2");      // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2");  // 32

// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 3

let gameCounter = 100
gameCounter++
console.log(gameCounter);


