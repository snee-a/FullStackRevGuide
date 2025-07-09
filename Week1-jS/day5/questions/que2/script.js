let button=document.getElementById("submit");
let result=document.getElementById("result");
let name1=document.getElementById("n1");
let name2=document.getElementById("n2");
let string;

button.addEventListener("click",()=>{
    if(name1=="" || name2==""){
        result.style.display="block";
        result.innerHTML=`Enter proper names!!!!`;
}
    let res=Math.floor(Math.random()*100)+1;
    if(res>80){
        string="You two are made for each other! 💍🥰"
    }
    else if(res>60){
        string="Good chemistry! 💕";
    }
    else if(res>40){
        string="Hmm... could work out 💌";
    }
    else{
        string="Friendzone alert! 😂";
    }
     result.style.display="block";
     result.innerHTML=`${name1.value} and ${name2.value}
        Love match is <strong>${res}%</strong><br>
        ${string}`;
     
    
})