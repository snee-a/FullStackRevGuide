        // Question 2: Basic Form Validation
        // 🔹❓ Problem:
        // Tumhe ek validateForm(email, password) function banana hai jo:

        // Check kare ki email me @ hona chahiye

        // Password kam se kam 6 characters ka hona chahiye

        // Agar dono valid hain → return "Valid"
        // Nahin to → return specific error message

        function validate(email,pass){
            if(!email.includes("@") || pass.length<6)
                return "invalid";
            else{
            return "valid";
            }
        }

    //    console.log( validate("sneha@gmail.com",1234567));
    //    console.log( validate("snehagmail.com",1234567));
       console.log( validate("sneha@gmail.com",1));
