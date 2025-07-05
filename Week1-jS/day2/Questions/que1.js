//  Practice 5 Short Questions (1 min each)
// Create an array with 3 colors.
// Add one more color at the end.
// Remove the first element.
// Find the index of "blue".
// Check if "green" exists in the array.

let colors=["red","blue","green"];// Create an array with 3 colors.
console.log(colors);

colors.push("peach");// Add one more color at the end.
console.log(colors);

colors.shift();// Remove the first element.
console.log(colors);

console.log(colors.indexOf("blue"));// Find the index of "blue".

console.log(colors.includes("green"));

//Replace the second element with "orange" using splice()
// Remove the last 2 elements from the array
// Reverse the array without using reverse() method
// Join the array into a single string separated by -
// Find the total number of letters in all color names combined
// 👉 (Use join("") + .length)

colors.splice(1,1,"orange");//Replace the second element with "orange" using splice()
console.log(colors);

// colors.pop();
// colors.pop();
// console.log(colors);

//or alternate and better way
colors.splice(-2);
console.log(colors);

//  Reverse the array without using reverse() method
let arr=[1,2,3,6,7]
let result=[];
for(i=arr.length-1;i>=0;i--){
   result.push(arr[i]);
}
console.log(result);

// Join the array into a single string separated by -
console.log(arr.join("-"));

// Find the total number of letters in all color names combined
// 👉 (Use join("") + .length)
let cols=["red","yello","green","blue"];
console.log(cols.join("").length);
