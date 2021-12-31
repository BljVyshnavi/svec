import React,{useState} from 'react'

export default function Statesinfuncomp() {
    let [name,updateName]=useState("VAISH");
    return (
        <div>
            <h1 onMouseOver={() => {updateName("VAISHNAVI")}}
            onMouseLeave={() => {updateName("vyshnavi")}}> 
                {name}
            </h1>
        </div>
    )
}
