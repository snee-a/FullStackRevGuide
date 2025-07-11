import React from "react";
import { useState } from "react";

export default function Login(){
    const [isLogin, setisLogin] = useState(false);
    return(
        <button onClick={()=>{
            setisLogin(true)
        }}>{isLogin ? <p>Please login</p>:<p>Welcome Back</p>} </button>
    )
}