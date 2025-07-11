import React from "react";
export default function Map(){
    let fruits=["apple","mango","pineapple"];
    return(
        <ul>
            {
                fruits.map((fruit,index)=>(
                     <li key={index}>{fruit}</li>
                ))
            }
        </ul>
    )
}