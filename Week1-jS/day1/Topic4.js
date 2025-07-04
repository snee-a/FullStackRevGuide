// Control Flow

// 1-if ,else if,else

let a=10,b=5;
if(a>b){
    console.log(a);
}
else if(a==b){
    console.log(b);
}
else{
    console.log("hello");
}

//2-Switch Case

switch(a-b){
    case 3:
        console.log("helo 3");
        break;//using break with switch case
    
    case 5:
        console.log("helo 5");
        break;//using break with switch case
    
    case 7:
        console.log("helo 7");
        break;//using break with switch case
    
}

//3-LOOPS

let arrs=[1,2,3,4,5]

// 1-For LOOP

for(i=1;i<=10;i++){
    console.log("for",i);
}

// 2-While loop

let x=2;

while(x<10){
    console.log(x,"while");
    x++;
}

// 3-do while

x=1;
do{
    console.log("dowhile",x);
    x++;
}while(x<0);


// 4-for of
for(arr of arrs){
    console.log(arr,"for  of");
}

//for in
let user={
    name:"sneha",
    age:20
}
for (key in user){
    console.log(key ,":" ,user[key]);
}

