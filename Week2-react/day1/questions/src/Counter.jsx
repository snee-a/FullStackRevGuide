import React from "react";
import { useState } from "react";

export default function Counter(){
    const [count, setcount] = useState(0);
    return (
        <>
        <button onClick={()=>{
            setcount(count+1)
        }}>COunt is : {count}</button>
        </>
    )
}