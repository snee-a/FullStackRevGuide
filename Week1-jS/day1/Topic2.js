//Data Types -> Primitive and Non Primitive 

// Primitive Data types 
    //1-String
    let name="SNeha"
    console.log(name);

    //2-Number
    let num=10; //number datatype mai int aur float dono ate h
    let num2=1.11;
    console.log(num,num2);

    //BOOLEAN
    let isDone=true;
    //only true or false value
    console.log(isDone);

    //Undefined
    let city;
    console.log(city);

    // NULL
    let a=null;//intentionally ham use null btate h (khali hai btate hai)
    console.log(a);

    //Symbol 
    let id=Symbol("userId"); //used in advanced apps

    // BigInt
    let n=1234567899888877766644n;
    console.log(n);//used in big cryptographic calculations

// NON-Premitive Data types
    //1-Object   Key-value pair
    let user={
        name:"Sneha",
        age:20
    }
    console.log(user);

    //2-Array
    let arr=["apple","mango","pineapple"];
    console.log(arr);

    //3-Function
    function hello(){
        console.log("hello");
    }
    hello();//function call

    //checking datatypes using typeOf
   console.log(typeof(hello));
    console.log(typeof(null));//js bug
    console.log(typeof({}));


    //question1  Question: Safe User Profile Reader
    // 🔹 Tumhare paas ek user object aata hai, lekin kabhi usme data undefined ya null hota hai.
    // 🎯 Task:
    // Ek function banao printUserInfo(user)
    // Jo safe tarike se user ka name, email, and age print kare
    // Agar koi field null ya undefined ho, toh "Not Provided" print kare


        function printUserInfo(user){
            if(user.name===null || user.name===undefined){
                console.log("Invalid name");
            }
            else{
                console.log(user.name);
            }
        }

        let user1={
            name:"Sneha",
            age:21
        };
        printUserInfo(user1);
        let user2={
            name:null,
            age:21
        };
        printUserInfo(user2);

    // for Shortcut-using ternary operator
        let age=19;
        let status=((age>18)?"true":"false");
        console.log(status);

    // Nullish Coalescing Operator (??) – to provide fallback/default value 
    //  Use when a value is null or undefined
    // (Baki falsey values like 0, "", false pe yeh kaam nahi karta)
        let naam=null;
        console.log(naam??"guest");//yahha pe naam null hai to guset print hua 

        let naam2="sneha";
        console.log(naam2??"guest"); // yaha naam hai to sneha print hua


    // question2 make a data type detector fucntion
        function dTdetect(value){
            return typeof(value);
        }

        console.log(dTdetect(9));
        console.log(dTdetect("Sneha"));
        console.log(dTdetect(null));
        console.log(dTdetect(undefined));
        console.log(dTdetect({}));
        console.log(dTdetect([]));

    //question 3 . Clean User Input : Task: Ek function cleanInput(value) likho jo string return kare:Agar 
    // value === null ya undefined hai → "Not Provided" Agar number ya boolean ho → string me convert karo Agar
    //  already string hai → trimmed string return karo 
    // cleanInput(" Sneha ")   ➞ "Sneha"
    // cleanInput(123)         ➞ "123"
    // cleanInput(true)        ➞ "true"
    // cleanInput(null)        ➞ "Not Provided"

    function cleanInput(value){
        if(value===null || value===undefined){
            return "not valid";
        }
        else if(typeof(value)==="string"){
            return value.trim();
        }
        return String(value);
    }

    let clean=cleanInput("   sneha ");
    console.log(clean);

    console.log(typeof(cleanInput(123)));

    console.log((cleanInput(null)));

    // question 4 : Truthy/Falsy Filter Task: Ek function filterTruthy(arr) likho jo array ke andar se falsy values hata de.
    // filterTruthy([0, 1, "", "Hello", false, null, undefined, 42])
    // Output: [1, "Hello", 42]
    // JS falsy values: false, 0, "", null, undefined, NaN

        function filterTruthy(values){
            let result=[];
            for (const value of values) {
           if(value){
            result.push(value);
           }
        }
        return result;
    }
        let arr1=[1,0,"hello",null,undefined,NaN,"",false];
        
        console.log(filterTruthy(arr1));

















