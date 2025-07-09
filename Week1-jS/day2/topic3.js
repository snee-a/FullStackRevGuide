//Some more js concepts

//1-map
// Returns a new array by transforming every element using a function.

let names=["sneha","arti","neha"];
const capitalised=names.map(name=>name.toUpperCase());
console.log(capitalised);

// 2-Filter
let nums=[1,2,3,4,56,6,8];
let numfilter=nums.filter((num=>num%2==0));
console.log(numfilter);

// 3-reduce reduces the array to single string
const prices=[100,200,300];
const total=prices.reduce((sum,price)=>sum+price,0);
console.log(total);

//some and every
const numbers = [1, 2, 3, 4];

const hasEven = numbers.some(num => num % 2 === 0); // true
console.log(hasEven);
const allPositive = numbers.every(num => num > 0);  // true
console.log(allPositive);
const allEven = numbers.every(num => num % 2 === 0); // false
console.log(allEven);