// Bas yaad rakho:
    // Har line jo tum likhti ho, chahe chhoti ho ya galat, wo tumhe ek great developer banane ki taraf le ja rahi hai.
    // Let’s make today productive and purposeful!

//Day2-topic1 -Array

//Array ek esa variable hai jo ek se jada values store karwa skta hai

let fruits=["apple","mango","banana"];
let colors = new Array("red", "green", "blue");//ignore this way more confusing
console.log(fruits);
console.log(colors);

//accessing elements
console.log(fruits[0]);

//array length
console.log(fruits.length);

//Common array methods
//1-push
fruits.push("grapes");
console.log(fruits);

// 2-pop
fruits.pop();//removes last element of array
console.log(fruits);

//3-shift
fruits.shift();//removes element from first
console.log(fruits);

// 4-unshift
fruits.unshift("pineapple");//adds in front
console.log(fruits);

// 5-indexof
console.log(fruits.indexOf("mango"));

// 6-Includes
console.log(fruits.includes("banana"));

// 7-slice
console.log(fruits.slice(1,2));

let nums=[1,2,3,4,5,6,7,8,9];

// 8-splice
//syntax- array.splice(startIndex, deleteCount, item1, item2, ...)
nums.splice(2,3,12,34,"hello");
console.log(nums);

// 9-join() - array to string
//array.join(seperator)

// nums.join(",");
console.log(nums.join(">"));
