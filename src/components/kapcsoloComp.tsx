import { useState } from "react";
import ki from "./off.png";
import be from "./on.png"

    

export function Kapcsolo()
{

    const [kapcsolo, setKapcsolo] = useState("Ki");
    
    const [pic, setPic] = useState(ki);





    return (

        <>

        <p>{kapcsolo} </p>
        
        <button style={{width:"200px"}} onClick={e => {if(kapcsolo == "Ki"){setKapcsolo("Be"); setPic(be)}else {setKapcsolo("Ki"); setPic(ki)}}}>{kapcsolo}</button><br />
        <img style={{width:"50%"}} src={pic} alt="" />
        
       

        
        </>
        
    )
}