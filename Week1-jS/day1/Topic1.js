var x=10;
var x=20;
var x=90;
//This shows var can be redelared again and again but was used earlier
console.log(x);

let y=2;
// let y=9; declaring y gaian producing error;
y=9;
console.log(y);//shows value of y can be changed but not redecalared

const z=45;
// z=0;produces error while changing the value
console.log(z);

//Testing Scope

function ScopeTest(){
    if(true){
        var a=10;//function scope
        let b=20;//block scope sirf scope {} ke andar rehta hai
        const c=30;//block scope sirf scope {} ke andar rehta hai
    }

    console.log(a);
    // console.log(b); yaha se access nahi kar skte {} ke andar kar skte h bcoz of block scope
    // console.log(c);  yaha se access nahi kar skte {} ke andar kar skte h bcoz of block scope
    
}
ScopeTest();
var a = 5;

function check() {
  console.log("Before:", a); // undefined due to hoisting
  var a = 10;
  console.log("After:", a);  // ?
}

check();
// let x = 1;

// if (x === 1) {
//   let x = 2;
//   console.log(x); // ?
// }

// console.log(x); // ?
