import { useState } from "react";

export default function Form(){
    const [formData, setformData] = useState(
        {
            fullname:"",
            username:"",
        }
    )
    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        console.log(fieldName);
        setformData((currdata)=>{
            currdata[fieldName]=new
        })
    }
    return(
        <>
        <form>
        <label htmlFor="fullname">Enter FUll name: </label>
        <input
            placeholder="Enter name" 
            type="text"
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullname"
            name="fullname">
          </input>
<br />
           <label htmlFor="username">Enter  username: </label>
        <input
            placeholder="Enter username" 
            type="text"
            value={formData.username} 
            onChange={handleInputChange}
            id="username"
            name="username">
          </input>
        </form>
        </>
    )
}