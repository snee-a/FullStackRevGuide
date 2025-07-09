// Question 1: Truthy/Falsy Filter
// 🔹❓ Problem:
// Tumhe ek aisa function banana hai jo input array me se saari falsy values hata de
// (yaani sirf truthy values return kare)

//  Example:
// Input:  [0, 1, "", "Hello", false, null, undefined, 42]
// Output: [1, "Hello", 42]

function filter(arrs){
    let result=[];
    for(arr of arrs){
        if(arr)
            result.push(arr);
    }
    return result;
}

let arrs=["name", null, 0, false,1,"hello"];

console.log(filter(arrs));