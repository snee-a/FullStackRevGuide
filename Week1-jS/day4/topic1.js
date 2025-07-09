// Todays topics are- Promises , async/await ,APIs , project-Random Quote 

// promises  promise OBJECT represents the eventual completion (success) or failure of an asynchronous opertion and its resulting value.

// RESOLVE AND REJECT 
function savetoDb(data){
    return new Promise((success,failure)=>{
    let internetSpeed=Math.floor(Math.random*10)+1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
    });
}

// then and catch 
let request= savetoDb("sneha");
request
.then(()=>{
    console.log("promise resolved");
})
.catch(()=>{
    console.log("promise ");
})