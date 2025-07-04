//Topic-3 javaScript Operators

// 1-Arithmatic Operator + - * / %
    let a=10,b=20;
    console.log(a+b,a-b,a*b,a/b,a%b);


// 2-Assignment Operator = += -= *= /= 

    a+=10;// means a=a+10;
        console.log(a);
    a-=10;
        console.log(a);
    a*=10;
        console.log(a);
    a/=10;
        console.log(a);

// 3-Comparison Operator
    a="123";
    b=123;
    console.log(a==b); //loose equal only checks value not the datatype

    console.log(a===b);//strict equal checks everything

    console.log(a!=b);//loose unequal 

    console.log(a!==b);//strict unequal

    let x=10,y=8;

    console.log(x>y);
    console.log(x>=y);
    console.log(x<=y);
    console.log(x<y);

// 4-logical operator

    console.log(true && true); //true
    console.log(false && true); //false
    console.log(false || true); //true
    console.log(!true );//false

// 5-Ternary Operator

    console.log((x>2)? "hello":"no hello");

// 6-Nullish Coalescing
    name=null;
    console.log((name)??"guest");

// 7-typeof
    console.log(typeof(123));//printing daratype

// 8-Instanceof
    let arr=[1,2,3];
    console.log([] instanceof Array);

// 9-JS Peculiarity: == vs ===
    console.log(5=="5");
    console.log(5==="5");

    console.log(null==undefined);
    console.log(null===undefined);

    console.log(NaN==NaN);

    //  Problem Statement:
    // Tumhe ek function banana hai validateUser(user)
    // jo user ka object accept kare aur uski validity check kare using multiple operators

   function validateUser(user)
    {
        if(user.name=="" || user.age<10 || typeof(user.name)!="string")
        {
            return "invalid status";
        }
        else return "valid status";
    }
    let user1={
        name:"sneha",
        age:10,
        email:null
    }

    let status=validateUser(user1);
    console.log(user1,status);

    let user2={
        name:"",
        age:9,
        email:"hello@gmail.com"
    }

      status=validateUser(user2);
    console.log(user2,status);
