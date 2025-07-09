//Asynchronous functions

// keywwords: async and await 

// async  using async we an create async fucntions and bydefault all async functions return a promise.jo promise return hoga usme ham then catch etc methods apply karte hai.

async function greet(){//returns a promise
    // abacd(); agar ham ye (random error producing)line likh denge to kuch error aaegga to promise rejected hoga varana accepted
    throw "some random error";
    return "hello";
}

greet()
.then(()=>{
    console.log("success");
})
.catch((err)=>{
    console.log("rejected",err);
});

//await

// pauses the execution of its surrounding async function  until process is settled(resolved or rejected) 

function getNum(){
    // console.log(5);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo(){
    await getNum();//jabtk ye await vali call complete nhi hogi tbtk baki calls nahi jaengi
    await getNum();
    getNum();
}
