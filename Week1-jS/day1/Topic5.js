//Function

//function declaration
function sayHello(){
    console.log("hello");
}

//funxtion call
sayHello();

//Arrow function

let hello=()=>{
    console.log("hello sneha");
}
hello();
//  4. IIFE – Immediately Invoked Function Expression

(function () {
  console.log("I run instantly!");
})();

(
    function (){
        console.log("instant");
    }
)();
//  Parameters vs Arguments

function add(a, b) { // a, b → parameters
  return a + b;
}

add(2, 3); // 2, 3 → arguments