function calculateBMI(w,h){
    return w/(h*h);
}
function category(bmi){
    if(bmi<18)
        return "underweight";
    else if(bmi>18 && bmi<21)
        return "lean";
    else if(bmi>21 && bmi<25)
        return "perfect";
    else 
        return "overweight";
}

let weight=60;
let height=2.5;

let bmi=calculateBMI(weight,height);
let cat=category(bmi);
console.log(cat);