const name = "madhu"
const repoCount = 50

console.log(name + repoCount + " Value");  // old approach

// string interpolation
console.log(`Hello my name is ${name} and my Repo count is ${repoCount} `);

const gameName = new String('madhumita-mp-com')

console.log(typeof gameName);        // object

console.log(gameName[0]);       // m

console.log(gameName.__proto__);    // {} it is not empty. go to the console and see multiple values.

console.log(gameName.length);      // 5

console.log(gameName.toUpperCase());     // MADHU
console.log(gameName.charAt(3));      // h 
console.log(gameName.indexOf('a'));     // 1  

const newString = gameName.substring(0,4)
console.log(newString);   // madh            0 index is include and 4 index is exclude

const anotherString = gameName.slice(-7, 4)    
console.log(anotherString);                    // dh
 
const newStringOne = "  madhu  "
console.log(newStringOne);
console.log(newStringOne.trim());    // remove extra space

const url = "https://madhu.com/madhu%20mita"
console.log(url.replace('%20', '-'))

console.log(url.includes('madhu'));

console.log(gameName.split('-'));






