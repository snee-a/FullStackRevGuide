let ratingSelect=document.getElementById("rating");
let ques_box=document.getElementById("question_box");
let getQ=document.getElementById("getQ");
let ans=document.getElementById("ans");
let result=document.getElementById("result");

let check=document.getElementById("check");

getQ.addEventListener("click", async ()=>{
    let rating=ratingSelect.value;
    console.log(rating);
    let res= await fetch(`https://api.truthordarebot.xyz/v1/truth?rating=${rating}`);
    let data = await res.json();
    console.log(res);
    console.log(data);

    let que=data.question;
    console.log(que);
    
    ques_box.innerHTML=`👀Here is your Question - <br> ${que}`;
    ans.hidden=false;

})

check.addEventListener("click",()=>{
    let num=Math.random();
    console.log(num);
    if(num>0.5){
        result.innerHTML=`"🤥 You're Lying! Truth radar caught you red-handed."`;
    }
    else{
        result.innerHTML=`"😇 You're Honest! Your soul is clear."`;
    }
})