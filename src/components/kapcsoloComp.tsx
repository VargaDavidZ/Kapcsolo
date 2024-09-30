import { useState } from "react";
import ki from "./off.png";
import be from "./on.png";

import izzoKi from "./kiIzzo.png";
import beIzzo from "./beIzzo.png";

    

export function Kapcsolo()
{

    const [kapcsolo, setKapcsolo] = useState("Ki");
    
    const [pic, setPic] = useState(ki);

    const [izzo,setIzzo] = useState(izzoKi)





    return (

        <>

        <p>{kapcsolo} </p>
        
        <button style={{width:"200px"}} onClick={e => {if(kapcsolo == "Ki"){setKapcsolo("Be"); setPic(be); setIzzo(beIzzo)}else {setKapcsolo("Ki"); setPic(ki); setIzzo(izzoKi)}}}>{kapcsolo}</button><br />
        <img style={{width:"25%"}} src={pic} alt="" />
        <img onClick={ e => {if(izzo == izzoKi){setIzzo(beIzzo)}else{setIzzo(izzoKi)}}} style={{width:"25%"}} src={izzo} alt="" />
        
       

        
        </>
        
    )
}