//  Asynchronous JavaScript 
// 1-setTimeout and setInterval

// setTimeout  ek kaam delay se ek baar karo

console.log("start");
setTimeout(()=>{
    console.log("hey after 3 sec")
},2000);
console.log("end");

//setinterval
let count = 0;

let inter=setInterval(()=>{
    console.log("hey",count);
    count++;

    if(count==5){
        clearInterval(inter);
    }
},1000);

// 2-Callback Hell
// callback Jab ek function ko dusre function me argument ke roop me pass karte hain, use kehte hain callback function.

// example of callback function greet(name) 
function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  let userName = "Sneha";
  callback(userName);  // ← yeh function ko baad me call kar raha hai
}

processUser(greet); // ← function ko pass kiya as argument (callback)

//calback hell in short matlab hai bhot jada callbacks ho jana jisse code messy aur unreadable ho jae jese ki 
console.log("Start");

setTimeout(() => {
  console.log("1. Bought Milk");

  setTimeout(() => {
    console.log("2. Made Tea");

    setTimeout(() => {
      console.log("3. Got Biscuits");

      setTimeout(() => {
        console.log("4. Served Tea");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

