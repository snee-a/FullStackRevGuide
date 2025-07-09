let marks = document.getElementsByClassName("marks_box");
let fails=document.getElementById("fails");

let calculate = document.getElementById("Calculate");
calculate.addEventListener("click",(event)=>{
    event.preventDefault();
    let sum=0;
    for(mark of marks){
        // if(mark<33){
        //     let li=document.createElement("li");
        //     fails.appendChild("li");
            
        // }
    sum += Number(mark.value);
    }
    let avg=sum/5;

    let result=document.getElementById("result");
    result.innerHTML=`The result is average ${avg}`;

});


