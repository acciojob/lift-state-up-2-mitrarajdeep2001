import React from "react";

export default function ChildComponent({setStateVariable}){
    return(
        <div className="child">
            <input type="text" onChange={(e) => setStateVariable(e.target.value)}/>
        </div>
    )
}