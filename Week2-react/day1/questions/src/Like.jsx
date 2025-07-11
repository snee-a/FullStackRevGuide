import { useState } from "react";
export default function Like(){
    const [isliked, setisliked] = useState(false);
    return (
        <p onClick={()=>{
            setisliked(!isliked)
        }}><i className={isliked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></p>
    )
}